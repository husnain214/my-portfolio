"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";

export default function ProjectThumbnail({ thumbnail }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`${styles["image-container"]}`}>
      <div className={styles["blur-load"]}>
        <Image
          className={`${styles.image} ${styles["regular-image"]}`}
          alt=""
          src={thumbnail.regular}
          onLoad={() => setLoaded(true)}
        />

        {!loaded && (
          <Image
            className={`${styles.image} ${styles["blur-image"]}`}
            alt=""
            src={thumbnail.lowRes}
          />
        )}
      </div>
    </div>
  );
}
