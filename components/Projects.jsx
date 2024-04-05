import { ProjectCard } from ".";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section>
      <div className="container flow">
        <h2 className={`${styles["primary-heading"]}`}>Projects</h2>

        <p className={styles.subtitle}>
          As a seasoned creator of contemporary, user-friendly web designs and
          digital solutions, I aim to assist you in constructing the brand of
          your fantasies.
        </p>

        <div className={`${styles["project-grid"]}`}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
