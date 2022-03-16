import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ServicesSection.module.css";
import haircut from "../public/images/haircut.svg";
import beard from "../public/images/beard.svg";
import child from "../public/images/child.svg";
import { CgArrowLongRight } from "react-icons/cg";
import { reveal, slideLeft, slideRight, cardAnimation } from "./Animation";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

function ServicesSection() {
  const [element, controls] = useScroll();

  return (
    <div className={styles.container}>
      <motion.section
        animate={{ opacity: 1, transition: { duration: 1 } }}
        initial={{ opacity: 0 }}
        className={styles.servicesContainer}
        ref={element}
      >
        <motion.div
          animate={controls}
          variants={reveal}
          transition={{ duration: 0.3, stiffness: 300 }}
          className={styles.topContent}
        >
          <h2>Services</h2>
          <Link href='/services'>
            <span className={styles.link}>
              <a>See All Services</a>
              <CgArrowLongRight className={styles.icon} />
            </span>
          </Link>
        </motion.div>
        <div className={styles.bottomContent}>
          <motion.div
            variants={slideLeft}
            animate={controls}
            transition={{ type: "tween", duration: 0.3 }}
            className={styles.cardOne}
          >
            <h4 className={styles.cardheading}>Hair Cuts</h4>
            <p className={styles.cardDescription} lang='en'>
              We can cut your hair in any style you want. There isnt a style we
              havent seen. From fades to flat tops, We've got you covered.
            </p>
            <div className={styles.placeHolderImage}>
              <Image src={haircut} alt='icon' />
            </div>
          </motion.div>
          <motion.div
            variants={cardAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.3 }}
            className={styles.cardTwo}
          >
            <h4 className={styles.cardheading}>Beards</h4>
            <p className={styles.cardDescription} lang='en'>
              Beard grooming has never been so easy. Let a professional do it,
              and We will keep your facial hair looking resplendent.
            </p>
            <div className={styles.placeHolderImage}>
              <Image src={beard} alt='icon' />
            </div>
          </motion.div>
          <motion.div
            variants={slideRight}
            animate={controls}
            transition={{ type: "tween", duration: 0.3 }}
            className={styles.cardThree}
          >
            <h4 className={styles.cardheading}>Children</h4>
            <p className={styles.cardDescription} lang='en'>
              Kids welcome! We will work with you and your children to give them
              the best cut possible.
            </p>
            <div className={styles.placeHolderImage}>
              <Image src={child} alt='icon' />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default ServicesSection;
