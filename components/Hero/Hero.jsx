import { ArrowDown } from "..";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className={`${styles["hero-section"]} grid`}>
          <h1 className={styles["primary-heading"]}>Husnain Zahid</h1>
          <p className={styles.subtitle}>
            Hello, I&apos;m Joey, an online product designer focusing on brand
            identity, advertising, and no-code instruments.
          </p>
          <button
            className={`${styles["cta-btn"]} flex items-center bg-secondary rounded-full uppercase font-bold`}
          >
            My Resume
            <ArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
}
