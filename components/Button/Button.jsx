import styles from "./styles.module.css";

export default function Button({ Icon, children }) {
  return (
    <button
      className={`${styles["cta-btn"]} flex items-center rounded-full uppercase font-bold`}
    >
      {children}
      {Icon && <Icon />}
    </button>
  );
}
