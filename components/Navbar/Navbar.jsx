"use client";

import { useState } from "react";
import Hamburger from "hamburger-react";
import styles from "./styles.module.css";

export default function Navbar() {
  const [navVisible, setNavVisible] = useState(false);
  return (
    <header>
      <div
        className="container grid place-center"
        style={{ "--padding-block": 0 }}
      >
        <div className={styles["brand-container"]} data-expanded={navVisible}>
          <div>Logo</div>

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
              className={`${styles["list-item"]} rounded-full`}
              aria-current={true}
            >
              Home
            </li>
            <li className={`${styles["list-item"]} rounded-full`}>Projects</li>
            <li className={`${styles["list-item"]} rounded-full`}>About</li>
            <li className={`${styles["list-item"]} rounded-full`}>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
