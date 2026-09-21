import Hero from "@/app/(home)/components/Hero";
import ProjectGrid from "@/app/(home)/components/ProjectGrid";
import {projects} from "@/app/(home)/projects";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center flex-1 p-4">
      <main className="flex flex-col w-full max-w-6xl flex-1 mx-auto">
        <Hero/>

        <div className="border-t border-white/10 my-4"/>

        <div className="prose">
          <h2 className="mb-2">Projects</h2>
          <p>
            Here are some of my projects that I have worked on. You can find more on my
            {" "}
            <a
              href="https://github.com/Clickism"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p/>
        </div>


        <ProjectGrid projects={projects}/>

        <div className="border-t border-white/10 my-4"/>
      </main>
    </div>
  );
}
