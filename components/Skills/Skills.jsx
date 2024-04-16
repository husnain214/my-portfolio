import { skills } from "@/constants";
import Image from "next/image";
import styles from "./styles.module.css";
import { Heading } from "..";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container flow">
        <Heading content="Skills" />
        <p>
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>

        <div className={styles["skills-grid"]}>
          <ul role="list">
            {skills.map((skill, index) => (
              <li key={index} className={styles["skill-container"]}>
                <div className={styles["skill-card"]}>
                  <Image
                    src={skill.symbol}
                    height="100"
                    width="100"
                    alt=""
                    role="presentation"
                  />

                  <span>{skill.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
