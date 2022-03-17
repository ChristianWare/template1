import styles from "../styles/Prefooter.module.css";
import Button from "./utils/Button";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { slideLeft, slideRight } from "./Animation";

function Prefooter({ text }) {
  const [element, controls] = useScroll();

  return (
    <div className={styles.prefooterContainer} ref={element}>
      <div className={styles.content}>
        <h5 lang='en'>{text}</h5>
        <div className={styles.btnContainer}>
          <Button
            text='Call'
            href='tel:602-473-0386'
            color='primary'
            btnSz='large'
          />
          <Button
            text='Contact'
            href='/#contact'
            color='primaryOutline2'
            btnSz='large'
          />
        </div>
      </div>
      <motion.article
        variants={slideLeft}
        animate={controls}
        transition={{ type: "spring", stiffness: 120 }}
        className={styles.content2}
      ></motion.article>
      <motion.article
        variants={slideRight}
        animate={controls}
        transition={{ type: "spring", stiffness: 120 }}
        className={styles.content3}
      ></motion.article>
    </div>
  );
}

export default Prefooter;
