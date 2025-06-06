import styles from "./InfoSection.module.css";
import Heading from "@theme/Heading";

const image = require("@site/static/img/logo.png").default;

export default function InfoSection() {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <img className={styles.icon} src={image} alt="Clickism logo"/>
        <div>
          <Heading as="h1">
            Hello! I'm Clickism.
          </Heading>
          <p>
            I'm a 19-year-old developer currently studying Computer Science in Germany.

            I enjoy exploring a variety of fields, including game modding with <strong>Java</strong>, frontend development
            with <strong>React</strong> and <strong>TypeScript</strong>, and backend development
            with <strong>Java</strong>, <strong>Spring Boot</strong> and <strong>SQL</strong>.

            I'm also passionate about low-level programming with <strong>C</strong>, <strong>Rust</strong>, and <strong>Assembly</strong>.
          </p>
          <p>
            My main interests lie in building tools and libraries that make development easier and more enjoyable
            for others, as well as full-stack development, compiler design and game development.
          </p>
        </div>
      </div>
    </div>
  )
}
