import { ArrowDown, Button } from "..";
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
          <Button Icon={ArrowDown}>My Resume</Button>
        </div>
      </div>
    </section>
  );
}
