import Image from "next/image";
import styles from "./styles.module.css";

export default function ProjectCard({ title, description, thumbnail, tags }) {
  return (
    <article className={`${styles.card} flow`}>
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

        <ul role="list" className={styles["card-tags"]}>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
