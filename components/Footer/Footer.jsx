import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer>
      <div
        className={`container ${styles["footer-content"]} flex items-center`}
      >
        <p>2024&copy; - Made by Husnain Zahid</p>

        <ul
          role="list"
          className="flex justify-between items-center"
          style={{ "--gap": "2rem" }}
        >
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
        </ul>
      </div>
    </footer>
  );
}
