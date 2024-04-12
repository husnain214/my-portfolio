import styles from "./styles.module.css";

export default function Heading({ content }) {
  return <h2 className={styles.heading}>{content}</h2>;
}
