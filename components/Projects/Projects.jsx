import { ProjectCard } from "..";
import { projects } from "@/constants";
import styles from "./styles.module.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container flow">
        <h2 className={`${styles["primary-heading"]}`}>Projects</h2>

        <p className={styles.subtitle}>
          From Concept to Completion. Here are my featured projects:
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
