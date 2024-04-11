import { skills } from "@/constants";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Skills() {
  return (
    <section className="container flow" id="skills">
      <h2 className={styles["primary-heading"]}>My Skills</h2>
      <p>
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </p>

      <div className={styles["skills-grid"]}>
        <ul role="list">
          {skills.map((skill, index) => (
            <li key={index} className={styles["skill-container"]}>
              <div className={styles["skill-card"]}>
                <Image src={skill.symbol} />

                <span>{skill.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
