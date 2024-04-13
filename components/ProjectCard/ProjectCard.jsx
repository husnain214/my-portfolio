import Image from "next/image";
import styles from "./styles.module.css";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  thumbnail,
  tags,
  demo,
  repo,
}) {
  return (
    <article className={`${styles.card}`}>
      <div className={`${styles["image-container"]}`}>
        <Image
          className={`${styles.image}`}
          width="500"
          alt=""
          src={thumbnail}
        />
      </div>

      <div
        className={`${styles["card-content"]} flow`}
        style={{ "--flow-spacing": ".7rem" }}
      >
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles["card-subtitle"]}>{description}</p>

        <div className={`flex items-center ${styles["project-links-wrapper"]}`}>
          <Link
            href={demo}
            target="_blank"
            className={`${styles["project-link"]} flex rounded-full font-bold`}
            style={{ "--gap": "0.5rem" }}
          >
            Live Demo
            <ArrowTopRightOnSquareIcon height={24} width={24} />
          </Link>

          <Link
            href={repo}
            target="_blank"
            className={`${styles["project-link"]} flex rounded-full font-bold`}
            style={{ "--gap": "0.5rem" }}
          >
            Source Code
            <ArrowTopRightOnSquareIcon height={24} width={24} />
          </Link>
        </div>

        <ul role="list" className={styles["card-tags"]}>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
