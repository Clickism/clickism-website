import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

export default function Home() {
  return (
    <Layout
      title="Hello">
      <main>
        <Heading as="h1" className="hero__title">
          Hi! I'm Clickism
        </Heading>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
