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
    <header
      className={`${styles.header}`}
      data-scrolled={scrolled}
      data-visible={navVisible}
    >
      <div
        className={`${styles["nav-container"]} container flex items-center justify-between`}
      >
        <div
          className={`${styles["nav-header"]} flex items-center justify-between`}
        >
          <Link href="/">
            <Image src={Logo} width="150" height="27" alt="logo" />
          </Link>

          <div className={styles["hamburger-btn"]}>
            <Hamburger
              size={25}
              label="toggle navigation"
              toggled={navVisible}
              toggle={setNavVisible}
            />
          </div>
        </div>

        <nav className={styles.navigation}>
          <ul role="list">
            {navLinks.map((link) => (
              <li key={link.id} className={styles["list-item"]}>
                <Link href={link.href} onClick={() => setActive(link.id)}>
                  {link.label}

                  {active === link.id && (
                    <motion.div
                      layoutId="active-pill"
                      className={styles["active-tab"]}
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
