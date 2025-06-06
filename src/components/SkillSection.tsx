import Heading from "@theme/Heading";
import styles from "./SkillSection.module.css";
import {DiJava, DiReact} from "react-icons/di";
import {SiC, SiJavascript, SiKotlin, SiRiscv, SiRust, SiSpringboot, SiTypescript} from "react-icons/si";
import React, {ReactNode} from "react";
import clsx from "clsx";
import {TbSql} from "react-icons/tb";
import {FaLaptopCode} from "react-icons/fa";

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
      color: "rgb(255,112,62)",
      borderColor: "rgb(255,112,62)",
    }
  },
  {
    name: "Kotlin",
    icon: <SiKotlin/>,
    css: {
      color: "rgb(140,68,253)",
      borderColor: "rgb(140,68,253)",
    }
  },
  {
    name: "C",
    icon: <SiC/>,
    css: {
      color: "rgb(0,123,255)",
      borderColor: "rgb(0,123,255)",
    }
  },
  {
    name: "Rust",
    icon: <SiRust/>,
    css: {
      color: "rgb(255,127,80)",
      borderColor: "rgb(255,127,80)",
    }
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot/>,
    css: {
      color: "rgb(68,216,68)",
      borderColor: "rgb(68,216,68)",
    }
  },
  {
    name: "JavaScript",
    icon: <SiJavascript/>,
    css: {
      color: "rgb(255,221,51)",
      borderColor: "rgb(255,221,51)",
    }
  },
  {
    name: "TypeScript",
    icon: <SiTypescript/>,
    css: {
      color: "rgb(0,122,204)",
      borderColor: "rgb(0,122,204)",
    }
  },
  {
    name: "React",
    icon: <DiReact/>,
    css: {
      color: "rgb(97,218,251)",
      borderColor: "rgb(97,218,251)",
    }
  },
  {
    name: "SQL",
    icon: <TbSql/>,
    css: {
      color: "rgb(0,123,255)",
      borderColor: "rgb(0,123,255)",
    }
  },
  {
    name: "RISC-V",
    icon: <SiRiscv/>,
    css: {
      color: "rgb(223,118,51)",
      borderColor: "rgb(223,118,51)",
    }
  },
  {
    name: "MIPS",
    icon: <FaLaptopCode/>,
    css: {
      color: "rgb(255,165,62)",
      borderColor: "rgb(255,165,62)",
    }
  },
  // {
  //   name: "JavaFX",
  //   icon: <DiJava/>,
  //   css: {
  //     color: "rgb(255,69,2)",
  //     borderColor: "rgb(255,69,2)",
  //   }
  // }
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
      <p>I have worked with several technologies throughout my development journey, such as:</p>
      <SkillList/>
    </div>
  )
}
