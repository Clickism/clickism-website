import Heading from "@theme/Heading";
import styles from "./SkillSection.module.css";
import {DiCss3Full, DiHtml5, DiJava, DiReact} from "react-icons/di";
import {
  SiC,
  SiGradle,
  SiJavascript,
  SiKotlin,
  SiPython,
  SiRiscv,
  SiRust,
  SiSpringboot,
  SiTypescript
} from "react-icons/si";
import React, {ReactNode} from "react";
import clsx from "clsx";
import {TbSql} from "react-icons/tb";

type Skill = {
  name: string;
  icon: ReactNode;
  css?: React.CSSProperties;
}

const skills: Skill[] = [
  {
    name: "Java",
    icon: <DiJava/>,
    css: {
      color: "var(--skill-java)",
      borderColor: "var(--skill-java)",
    }
  },
  {
    name: "Kotlin",
    icon: <SiKotlin/>,
    css: {
      color: "var(--skill-kotlin)",
      borderColor: "var(--skill-kotlin)",
    }
  },
  {
    name: "C",
    icon: <SiC/>,
    css: {
      color: "var(--skill-c)",
      borderColor: "var(--skill-c)",
    }
  },
  {
    name: "Python",
    icon: <SiPython/>,
    css: {
      color: "var(--skill-python)",
      borderColor: "var(--skill-python)",
    }
  },
  {
    name: "Rust",
    icon: <SiRust/>,
    css: {
      color: "var(--skill-rust)",
      borderColor: "var(--skill-rust)",
    }
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot/>,
    css: {
      color: "var(--skill-springboot)",
      borderColor: "var(--skill-springboot)",
    }
  },
  {
    name: "JavaScript",
    icon: <SiJavascript/>,
    css: {
      color: "var(--skill-javascript)",
      borderColor: "var(--skill-javascript)",
    }
  },
  {
    name: "TypeScript",
    icon: <SiTypescript/>,
    css: {
      color: "var(--skill-typescript)",
      borderColor: "var(--skill-typescript)",
    }
  },
  {
    name: "React",
    icon: <DiReact/>,
    css: {
      color: "var(--skill-react)",
      borderColor: "var(--skill-react)",
    }
  },
  {
    name: "SQL",
    icon: <TbSql/>,
    css: {
      color: "var(--skill-sql)",
      borderColor: "var(--skill-sql)",
    }
  },
  {
    name: "RISC-V",
    icon: <SiRiscv/>,
    css: {
      color: "var(--skill-riscv)",
      borderColor: "var(--skill-riscv)",
    }
  },
  // {
  //   name: "MIPS",
  //   icon: <FaLaptopCode/>,
  //   css: {
  //     color: "var(--skill-mips)",
  //     borderColor: "var(--skill-mips)",
  //   }
  // },
  {
    name: "JavaFX",
    icon: <DiJava/>,
    css: {
      color: "var(--skill-java-fx)",
      borderColor: "var(--skill-java-fx)",
    }
  },
  {
    name: "Gradle",
    icon: <SiGradle/>,
    css: {
      color: "var(--skill-gradle)",
      borderColor: "var(--skill-gradle)",
    }
  },
  {
    name: "HTML",
    icon: <DiHtml5/>,
    css: {
      color: "var(--skill-html)",
      borderColor: "var(--skill-html)",
    }
  },
  {
    name: "CSS",
    icon: <DiCss3Full/>,
    css: {
      color: "var(--skill-css)",
      borderColor: "var(--skill-css)",
    }
  },
];

function SkillList() {
  const [hoveredSkill, setHoveredSkill] = React.useState<Skill | null>(null);

  return (
    <div className={clsx(styles.skillList)}
         onMouseLeave={() => setHoveredSkill(null)}>
      {skills.map(skill => (
        <div key={skill.name}
             className={clsx(styles.skill, 'cool-button')}
             style={skill.css}
             onMouseEnter={() => setHoveredSkill(skill)}>
          <div className={styles.skillLine}>
            {skill.name}
            <div className={styles.icon}>
              {skill.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function SkillSection() {
  return (
    <div className={styles.container}>
      <Heading as="h1">
        My Skills
      </Heading>
      <p>
        Here are some of the tools and technologies I have worked with:
      </p>
      <SkillList/>
    </div>
  )
}
