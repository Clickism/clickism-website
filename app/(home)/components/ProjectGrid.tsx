import {getModrinthDownloads, Project} from '@/app/(home)/project';
import ProjectCard from '@/app/(home)/components/ProjectCard';

export default async function ProjectGrid({projects}: { projects: Project[] }) {
  const downloads = await getModrinthDownloads(projects);
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          project={project}
          downloads={downloads.get(project.modrinth || '')}
        />
      ))}
    </div>
  );
}
