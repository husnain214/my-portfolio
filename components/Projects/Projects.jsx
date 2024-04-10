import { ProjectCard } from "..";
import { projects } from "@/constants";
import styles from "./styles.module.css";

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

        <div className={`${styles["project-grid"]} grid`}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
