"use client";

import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import styles from "./styles.module.css";
import { Logo } from "@/assets/images";
import Image from "next/image";
import { navLinks } from "@/constants";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [navVisible, setNavVisible] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setScrollingDown(true);
    } else setScrollingDown(false);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={scrollingDown ? "hidden" : "visible"}
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
                      layoutId={scrollingDown ? "" : "active-pill"}
                      className={styles["active-tab"]}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
