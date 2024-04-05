import { ArrowDown } from ".";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className={`grid ${styles["hero-section"]}`}>
          <h1 className="text-display-2xl">Husnain Zahid</h1>
          <p
            style={{ fontWeight: "600" }}
            className={`${styles["scroll-cta"]} flex items-center bg-secondary rounded-full uppercase`}
          >
            Scroll Down
            <ArrowDown />
          </p>
        </div>

        <div className="flex justify-between">
          <div>
            <h2>Let&apos;s Talk</h2>
            <p>hello@joey.co</p>
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
