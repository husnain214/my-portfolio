import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <header>
      <div
        className="container grid grid-center"
        style={{ "--padding-block": 0 }}
      >
        <div>Logo</div>

        <nav
          className={`${styles.navigation} bg-primary text-secondary rounded-full`}
        >
          <ul role="list" className="flex justify-between">
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
