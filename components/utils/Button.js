import styles from "../../styles/Button.module.css";
import Link from "next/link";

function Button({ text, href = "", icon= "", color="primary" }) {

  return (
    <Link href={href}>
      <a className={`${styles.btn} ${styles[color]}`}>
        <p className={styles.btnText}>{text}</p>
        <span className={styles.icon}>{icon}</span>
      </a>
    </Link>
  );
}

export default Button;
