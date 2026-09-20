"use client";
import Image from 'next/image';
import Link from 'fumadocs-core/link';
import {ArrowDownToLine, ArrowDownToLineIcon, BookOpen, Download, ExternalLink} from 'lucide-react';
import {SiGithub, SiModrinth} from '@icons-pack/react-simple-icons';
import {buttonVariants} from 'fumadocs-ui/components/ui/button';
import Tilt from 'react-parallax-tilt';

import {Project, ProjectLink} from '@/app/(home)/project';

function ProjectLinkButton({link}: { link: ProjectLink }) {
  const icons = {
    GITHUB: <SiGithub className="size-3.5"/>,
    MODRINTH: <SiModrinth className="size-3.5"/>,
    DOCS: <BookOpen className="size-3.5"/>,
    MAVEN: <ExternalLink className="size-3.5"/>,
  };

  const labels = {
    GITHUB: 'GitHub',
    MODRINTH: 'Modrinth',
    DOCS: 'Docs',
    MAVEN: 'Maven',
  };

  return (
    <Link
      href={link.href}
      className={buttonVariants({
        variant: 'secondary',
        size: 'sm',
        className: 'h-8 gap-1.5 px-2.5',
      })}
    >
      {icons[link.type]}
      {labels[link.type]}
    </Link>
  );
}

export default function ProjectCard({project, downloads}: { project: Project; downloads?: number; }) {
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
              <Image src={project.image} alt={project.name} width={32} height={32}/>
            )}
            <h2 className="font-semibold">
              {project.name}
            </h2>
            {downloads !== undefined && (
              <span className="ml-auto text-sm text-fd-muted-foreground flex items-center gap-1">
                <ArrowDownToLine size="14" />
                {downloads.toLocaleString()}
              </span>
            )}
          </div>

          <p className="mt-2 text-sm text-fd-muted-foreground">
            {project.description}
          </p>

          <div className="mt-auto"/>

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
