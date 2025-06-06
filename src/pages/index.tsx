import Layout from "@theme/Layout";
import ProjectsSection from "@site/src/components/ProjectsSection";
import InfoSection from "@site/src/components/InfoSection";
import SkillSection from "@site/src/components/SkillSection";
import MainContent from "@site/src/components/MainContent";

export default function Home() {
  return (
    <Layout
      title="Clickism"
      description="">
      <InfoSection/>
      <MainContent>
        <SkillSection/>
        <ProjectsSection/>
      </MainContent>
    </Layout>
  )
}
