import styles from "../styles/Prefooter.module.css";
import Button from "./utils/Button";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { topContainerAnimation, slideLeft, slideRight } from "./Animation";

function Prefooter({ text }) {
  const [element, controls] = useScroll();

  return (
    <div className={styles.prefooterContainer} ref={element}>
      <div className={styles.content}>
        <h5 lang='en'>{text}</h5>
        <div className={styles.btnContainer}>
          <Button text='Get Quote' href='/' color='primary' btnSz='large' />
          <Button
            text='Get Quote'
            href='/'
            color='primaryOutline2'
            btnSz='large'
          />
        </div>
      </div>
      <motion.article
        variants={slideLeft}
        animate={controls}
        transition={{ type: "tween", duration: 0.5 }}
        className={styles.content2}
      ></motion.article>
      <motion.article
        variants={slideRight}
        animate={controls}
        transition={{ type: "tween", duration: 0.5 }}
        className={styles.content3}
      ></motion.article>
    </div>
  );
}

export default Prefooter;
