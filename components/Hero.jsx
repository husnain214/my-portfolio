import { ArrowDown } from ".";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className={`${styles["hero-section"]} flex justify-between`}>
          <h1 className={`${styles["primary-heading"]} text-display`}>
            Husnain Zahid
          </h1>
          <p
            className={`${styles["scroll-cta"]} ${styles["secondary-heading"]} flex items-center bg-secondary rounded-full uppercase font-bold`}
          >
            Scroll Down
            <ArrowDown />
          </p>
        </div>

        <div className="flex justify-between">
          <div>
            <h2 className={`${styles["secondary-heading"]}`}>
              Let&apos;s Talk
            </h2>
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
