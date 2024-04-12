"use client";

import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import styles from "./styles.module.css";
import { Logo } from "@/assets/images";
import Image from "next/image";

export default function Navbar() {
  const [navVisible, setNavVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header className={`${styles.header}`} data-scrolled={scrolled}>
      <div
        className="container flex items-center justify-between"
        style={{ "--padding-block": 0, "--gap": "1.5rem" }}
      >
        <div className={styles["brand-container"]} data-expanded={navVisible}>
          <Image src={Logo} width={150} />

          <div className={styles["hamburger-btn"]}>
            <Hamburger
              size={25}
              label="toggle navigation"
              toggled={navVisible}
              toggle={setNavVisible}
            />
          </div>
        </div>

        <nav className={`${styles.navigation}`} data-visible={navVisible}>
          <ul role="list">
            <li
              onClick={() => setNavVisible(false)}
              aria-current="true"
              className={`${styles["list-item"]} rounded-full`}
            >
              <a href="#home">Home</a>
            </li>
            <li
              onClick={() => setNavVisible(false)}
              className={`${styles["list-item"]} rounded-full`}
            >
              <a href="#services">Services</a>
            </li>
            <li
              onClick={() => setNavVisible(false)}
              className={`${styles["list-item"]} rounded-full`}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              onClick={() => setNavVisible(false)}
              className={`${styles["list-item"]} rounded-full`}
            >
              <a href="#skills">Skills</a>
            </li>
            <li
              onClick={() => setNavVisible(false)}
              className={`${styles["list-item"]} rounded-full`}
            >
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
