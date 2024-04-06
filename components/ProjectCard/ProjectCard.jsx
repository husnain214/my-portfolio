import Image from "next/image";
import cardImage from "@/public/images/card-image.webp";
import styles from "./styles.module.css";

export default function ProjectCard() {
  return (
    <article className={`${styles.card} flow`}>
      <div className={`${styles["image-container"]}`}>
        <Image
          className={`${styles.image}`}
          width="500"
          alt=""
          src={cardImage}
        />
      </div>

      <div>
        <h3 className={styles.heading}>Entertainment App</h3>
      </div>
    </article>
  );
}
