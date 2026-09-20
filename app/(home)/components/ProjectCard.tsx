"use client";
import Image from "next/image";
import Link from "fumadocs-core/link";
import { ArrowDownToLine, BookOpen, ExternalLink } from "lucide-react";
import {
  SiApachemaven,
  SiCurseforge,
  SiGithub,
  SiModrinth,
} from "@icons-pack/react-simple-icons";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import Tilt from "react-parallax-tilt";

import { DownloadCount, Project, ProjectLink } from "@/app/(home)/project";
import { Tooltip } from "@base-ui/react/tooltip";

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  const icons = {
    GITHUB: <SiGithub className="size-3.5" />,
    MODRINTH: <SiModrinth className="size-3.5" />,
    DOCS: <BookOpen className="size-3.5" />,
    MAVEN: <SiApachemaven className="size-3.5" />,
    EXTERNAL: <ExternalLink className="size-3.5" />,
  };

  const labels = {
    GITHUB: "GitHub",
    MODRINTH: "Modrinth",
    DOCS: "Docs",
    MAVEN: "Maven",
    EXTERNAL: "External",
  };

  return (
    <Link
      href={link.href}
      className={buttonVariants({
        variant: "secondary",
        size: "sm",
        className: "h-8 gap-1.5 px-2.5",
      })}
    >
      {icons[link.type]}
      {link.label ? link.label : labels[link.type]}
    </Link>
  );
}

function DownloadBadge({ downloads }: { downloads: DownloadCount }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger
        render={
          <span className="ml-auto text-sm text-fd-muted-foreground flex items-center gap-1 hover:text-fd-foreground transition-colors">
            <ArrowDownToLine size="14" />
            {downloads.total.toLocaleString()}
          </span>
        }
      />
      <Tooltip.Portal>
        <Tooltip.Positioner side="top" sideOffset={6}>
          <Tooltip.Popup className="flex flex-col gap-2 rounded-md border bg-fd-popover px-3 py-2 text-xs text-fd-popover-foreground shadow-lg">
            <div className="flex items-center gap-2 text-fd-muted-foreground">
              <SiModrinth size={14} /> {downloads.modrinth.toLocaleString()}
            </div>
            <div className="flex items-center gap-2 text-fd-muted-foreground">
              <SiCurseforge size={14} /> {downloads.curseforge.toLocaleString()}
            </div>
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

export default function ProjectCard({
  project,
  downloads,
}: {
  project: Project;
  downloads?: DownloadCount;
}) {
  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      perspective={1000}
      scale={1.02}
      transitionSpeed={1500}
      glareEnable
      glareMaxOpacity={0.1}
      glareColor="white"
      glareBorderRadius="var(--radius-xl)"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-xl border bg-fd-card">
        <div className="flex h-full flex-col p-5">
          <div className="flex items-center gap-3">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                style={{ imageRendering: "pixelated" }}
                width={32}
                height={32}
              />
            )}
            <h2 className="font-semibold">{project.label ?? project.name}</h2>
            {downloads !== undefined && <DownloadBadge downloads={downloads} />}
          </div>

          <p className="mt-2 text-sm text-fd-muted-foreground">
            {project.description}
          </p>

          <div className="mt-auto" />

          <div className="mt-4 flex flex-wrap gap-2">
            {project.links.map((link) => (
              <ProjectLinkButton
                key={`${link.type}-${link.href}`}
                link={link}
              />
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
