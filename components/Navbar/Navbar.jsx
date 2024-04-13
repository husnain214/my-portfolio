"use client";

import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import styles from "./styles.module.css";
import { Logo } from "@/assets/images";
import Image from "next/image";
import { navLinks } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [navVisible, setNavVisible] = useState(false);
  const [active, setActive] = useState("home");
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
            {navLinks.map((link) => (
              <li key={link.id} className={`${styles["list-item"]}`}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setActive(link.id);
                    setNavVisible(false);
                  }}
                >
                  {link.label}

                  {active === link.id && (
                    <motion.div
                      layoutId="active-pill"
                      className={styles["current-tab"]}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
