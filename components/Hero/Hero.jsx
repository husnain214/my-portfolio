"use client";

import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section id="home">
      <div className="container" style={{ "--padding-block": "2rem" }}>
        <div className={`${styles["hero-section"]} grid`}>
          <h1 className={styles["primary-heading"]}>Husnain Zahid</h1>
          <p className={styles.subtitle}>
            Hello, I&apos;m Husnain, a full stack web developer crafting
            seamless digital experiences from front-end design to back-end
            functionality.
          </p>
          <Link
            href=""
            className="cta-btn flex items-center rounded-full font-bold"
          >
            My Resume
            <ArrowDownCircleIcon height={24} width={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
