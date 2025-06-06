import Layout from "@theme/Layout";
import ProjectsSection from "@site/src/components/ProjectsSection";
import InfoSection from "@site/src/components/InfoSection";
import SkillSection from "@site/src/components/SkillSection";

export default function Home() {
  return (
    <Layout
      title="Clickism"
      description="">
      <main>
        <InfoSection/>
        <SkillSection/>
        <ProjectsSection/>
      </main>
    </Layout>
  )
}
