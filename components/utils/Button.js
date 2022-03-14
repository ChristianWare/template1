import styles from "../../styles/Button.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

function Button({
  text,
  href = "",
  color = "primary",
  btnSz = "large",
}) {
  return (
    <motion.button whileTap={{ scale: 0.9 }}>
      <Link href={href}>
        <a className={`${styles.btn} ${styles[color]} ${styles[btnSz]}`}>
          {text}
        </a>
      </Link>
    </motion.button>
  );
}

export default Button;
