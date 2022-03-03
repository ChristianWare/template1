import styles from "../../styles/Button.module.css";
import Link from "next/link";

function Button({ text, href = "", color = "primary", btnSz = "large" }) {
  return (
    <Link href={href}>
      <a className={`${styles.btn} ${styles[color]} ${styles[btnSz]}`}>
        <p className={styles.btnText}>{text}</p>
      </a>
    </Link>
  );
}

export default Button;
