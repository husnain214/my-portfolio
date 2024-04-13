"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { services } from "@/constants";
import { Heading } from "..";

export default function Services() {
  return (
    <section id="services">
      <div className="container flow">
        <Heading content="Services" />

        <p>
          From pixel-perfect frontends to robust backends, I tailor our services
          to exceed your expectations and elevate your online presence.
        </p>

        <ul className={styles["services-grid"]}>
          {services.map((service, index) => (
            <li key={service.title + index}>
              <article className="flow">
                <Image
                  height={50}
                  width={50}
                  src={service.icon}
                  alt={service.title}
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
