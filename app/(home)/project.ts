import { unstable_cache } from "next/cache";
import {ReactNode} from "react";

export type ProjectLinkType = "MODRINTH" | "GITHUB" | "DOCS" | "MAVEN" | "EXTERNAL";

export interface ProjectLink {
  label?: string | ReactNode;
  type: ProjectLinkType;
  href: string;
}

export interface Project {
  name: string;
  label?: string | ReactNode;
  image?: string;
  description: string;
  links: ProjectLink[];
  modrinthSlug?: string;
  curseforgeId?: number;
}

type ModrinthProject = {
  id: string;
  slug: string | null;
  downloads: number;
};

/**
 * Fetches the download counts for the given Modrinth projects.
 * @param projects The list of projects to fetch download counts for.
 * @returns A map of project slugs to their download counts.
 */
async function getModrinthDownloads(projects: Project[]) {
  const slugs = projects
    .map((project) => project.modrinthSlug)
    .filter((slug): slug is string => slug !== undefined);
  if (slugs.length === 0) {
    return new Map<string, number>();
  }
  const response = await fetch(
    `https://api.modrinth.com/v2/projects?ids=${encodeURIComponent(JSON.stringify(slugs))}`,
    {
      next: {
        revalidate: 300,
      },
    },
  );
  if (!response.ok) {
    return new Map<string, number>();
  }
  const data = (await response.json()) as ModrinthProject[];
  return new Map(
    data
      .filter((project) => project.slug !== null)
      .map((project) => [project.slug!, project.downloads]),
  );
}

type CurseforgeProject = {
  id: number;
  downloadCount: number;
};

/**
 * Fetches the download counts for the given Curseforge projects.
 * @param projects The list of projects to fetch download counts for.
 * @returns A map of project IDs to their download counts.
 */
async function getCurseforgeDownloads(projects: Project[]) {
  const ids = projects
    .map((project) => project.curseforgeId)
    .filter((id): id is number => id !== undefined);
  if (ids.length === 0) {
    return new Map<number, number>();
  }
  const apiKey = process.env.CURSEFORGE_API_KEY!;
  const response = await fetch("https://api.curseforge.com/v1/mods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      modIds: ids,
    }),
    next: {
      revalidate: 300,
    },
  });
  if (!response.ok) {
    return new Map<number, number>();
  }
  const data = (await response.json()) as {
    data: CurseforgeProject[];
  };
  return new Map(
    data.data.map((project) => [project.id, project.downloadCount]),
  );
}

export type DownloadCount = {
  modrinth: number;
  curseforge: number;
  total: number;
};

/**
 * Fetches the total download counts for the given projects from both Modrinth and Curseforge.
 * @param projects The list of projects to fetch total download counts for.
 * @returns A record from project names to their download counts.
 */
export const getTotalDownloads = unstable_cache(
  async (projects: Project[]): Promise<Record<string, DownloadCount>> => {
    const [modrinth, curseforge] = await Promise.all([
      getModrinthDownloads(projects),
      getCurseforgeDownloads(projects),
    ]);

    const totalDownloads: Record<string, DownloadCount> = {};
    for (const project of projects) {
      const modrinthDownloads = project.modrinthSlug
        ? modrinth.get(project.modrinthSlug) || 0
        : 0;
      const curseforgeDownloads = project.curseforgeId
        ? curseforge.get(project.curseforgeId) || 0
        : 0;

      totalDownloads[project.name] = {
        modrinth: modrinthDownloads,
        curseforge: curseforgeDownloads,
        total: modrinthDownloads + curseforgeDownloads,
      };
    }
    return totalDownloads;
  },
  ["total-project-downloads"],
  {
    revalidate: 60 * 60 * 6, // 6 hours
  },
);

export function github(link: string): ProjectLink {
  return {
    type: "GITHUB",
    href: link,
  };
}

export function modrinth(link: string): ProjectLink {
  return {
    type: "MODRINTH",
    href: link,
  };
}

export function docs(link: string): ProjectLink {
  return {
    type: "DOCS",
    href: link,
  };
}

export function maven(link: string): ProjectLink {
  return {
    type: "MAVEN",
    href: link,
  };
}

export function external(link: string, label: ProjectLink["label"]): ProjectLink {
  return {
    type: "EXTERNAL",
    href: link,
    label,
  };
}
