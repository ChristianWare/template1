import styles from "../../styles/Button.module.css";
import Link from "next/link";

function Button({ text, href = "", color = "primary", btnSz = "large" }) {
  return (
    <Link href={href}>
      <a
        className={`${styles.btn} ${styles[color]} ${styles[btnSz]} ${styles.btnText}`}
      >
        {text}
      </a>
    </Link>
  );
}

export default Button;
