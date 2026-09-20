export type ProjectLinkType = 'MODRINTH' | 'GITHUB' | 'DOCS' | 'MAVEN';

export interface ProjectLink {
  type: ProjectLinkType;
  href: string;
}

export interface Project {
  name: string;
  image?: string;
  description: string;
  links: ProjectLink[];
  modrinth?: string;
}

export type ModrinthProject = {
  id: string;
  slug: string | null;
  downloads: number;
}

/**
 * Fetches the download counts for the given Modrinth projects.
 * @param projects The list of projects to fetch download counts for.
 * @returns A map of project slugs to their download counts.
 */
export async function getModrinthDownloads(projects: Project[]) {
  const slugs = projects
    .map((project) => project.modrinth)
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
  const data = await response.json() as ModrinthProject[];
  return new Map(
    data
      .filter((project) => project.slug !== null)
      .map((project) => [project.slug!, project.downloads]),
  );
}
