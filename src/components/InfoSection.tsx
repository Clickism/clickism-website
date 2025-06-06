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

            I enjoy exploring a variety of fields, including game modding with Java and Kotlin, frontend development
            with React and TypeScript, and backend development with Java, Spring Boot and SQL.

            I'm also passionate about low-level programming with C, Rust, and Assembly.
            My main interests lie in building tools and libraries that make development easier and more enjoyable
            for others, as well as compiler design and systems programming.
          </p>
        </div>
      </div>
    </div>
  )
}
