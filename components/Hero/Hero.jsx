import { ArrowDown } from "..";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className={`${styles["hero-section"]} grid`}>
          <h1 className={styles["primary-heading"]}>Husnain Zahid</h1>
          <p
            className={`${styles["cta-btn"]} ${styles["secondary-heading"]} flex items-center bg-secondary rounded-full uppercase font-bold`}
          >
            My Resume
            <ArrowDown />
          </p>
        </div>

        <div
          className="flex justify-between items-center"
          style={{ flexWrap: "wrap" }}
        >
          <div>
            <h2 className={`${styles["secondary-heading"]}`}>
              Let&apos;s Talk
            </h2>
            <p>husnainzahid214@gmail.com</p>
          </div>

          <p className={styles.subtitle}>
            Hello, I&apos;m Joey, an online product designer focusing on brand
            identity, advertising, and no-code instruments.
          </p>
        </div>
      </div>
    </section>
  );
}
