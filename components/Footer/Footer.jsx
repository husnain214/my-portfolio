import Link from "next/link";
import styles from "./styles.module.css";
import { socialLinks } from "@/constants";

export default function Footer() {
  return (
    <footer>
      <div
        className={`container ${styles["footer-content"]} flex items-center`}
      >
        <p>{new Date().getFullYear()}&copy; - Made by Husnain Zahid</p>

        <ul
          role="list"
          className="flex justify-between items-center"
          style={{ "--gap": "2rem" }}
        >
          {socialLinks.map((link, index) => (
            <li key={link.label + index}>
              <Link
                target="_blank"
                href={link.href}
                className={styles["social-link"]}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
