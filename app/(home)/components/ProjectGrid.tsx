import {Project} from '@/app/(home)/project';
import ProjectCard from '@/app/(home)/components/ProjectCard';

export default function ProjectGrid({projects}: { projects: Project[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          project={project}
        />
      ))}
    </div>
  );
}
