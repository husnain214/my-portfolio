import { Heading, ProjectCard } from "..";
import { projects } from "@/constants";
import styles from "./styles.module.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container flow">
        <Heading content="Projects" />

        <p className={styles.subtitle}>
          From Concept to Completion. Here are my featured projects:
        </p>

        <div className={`${styles["project-grid"]} grid`}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
