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
            I'm a 19 year old developer, currently studying Computer Science in Germany.
          </p>
        </div>
      </div>
    </div>
  )
}
