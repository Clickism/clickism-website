import Hero from "@/app/(home)/components/Hero";
import ProjectGrid from "@/app/(home)/components/ProjectGrid";
import {projects} from "@/app/(home)/projects";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center flex-1 p-4">
      <main className="flex flex-col w-full max-w-6xl flex-1 mx-auto">
        <Hero/>

        <div className="border-t border-white/10 my-4"/>

        <h1 className="text-2xl font-bold mb-4">Projects</h1>

        <ProjectGrid projects={projects}/>

        <div className="border-t border-white/10 my-4"/>
      </main>
    </div>
  );
}
