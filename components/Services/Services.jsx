import { ReactIcon } from "@/assets/images";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Services() {
  return (
    <section id="services">
      <div className="container flow">
        <h2 className={styles["primary-heading"]}>Services</h2>
        <p>
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>

        <ul className={styles["services-grid"]}>
          <li>
            <article className="flow">
              <Image src={ReactIcon} />
              <h3>Responsive Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae dolore itaque repellat consequuntur voluptatem qui
              </p>
            </article>
          </li>
          <li>
            <article className="flow">
              <Image src={ReactIcon} />
              <h3>Frontend Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae dolore itaque repellat consequuntur voluptatem qui
              </p>
            </article>
          </li>
          <li>
            <article className="flow">
              <Image src={ReactIcon} />
              <h3>Backend Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae dolore itaque repellat consequuntur voluptatem qui
              </p>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}
