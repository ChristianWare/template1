import Link from "next/link";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import styles from "../styles/AboutSection.module.css";
import b6 from "../public/images/b6.jpg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { topContainerAnimation, slideLeft, slideRight } from "./Animation";

function AboutSection() {
  const [element, controls] = useScroll();

  return (
    <div className={styles.container} ref={element}>
      <motion.section
        variants={topContainerAnimation}
        animate={controls}
        transition={{ duration: 0.3 }}
        className={styles.AboutSectionContainer}
      >
        <motion.div
          variants={slideLeft}
          animate={controls}
          transition={{ type: "tween", duration: 0.3 }}
          className={styles.contentLeft}
        >
          <picture className={styles.contentLeftA}>
            <Image
              src={b6}
              alt=''
              width={475}
              height={575}
              objectFit='cover'
              className={styles.img}
            />
          </picture>
        </motion.div>
        <motion.div
          variants={slideRight}
          animate={controls}
          transition={{ type: "tween", duration: 0.3 }}
          className={styles.contentRight}
        >
          <div className={styles.contentRightA}>
            <h2>Our Origin Story</h2>

            <div className={styles.btnContainer}>
              <Link href='/about'>
                <span className={styles.link}>
                  <a>Read More</a>
                  <CgArrowLongRight className={styles.icon} />
                </span>
              </Link>
            </div>
            <p className={styles.contnetRightDesciption} lang='en'>
              Our barber shop is dedicated for men to relax, freshen their
              style, and be pampered. Elegant offers a wide range of barbering
              services including detailed men’s haircuts such as fades, flat
              tops, tapers, layered haircuts. and a variety of other services
              such as precise straight razor shaves, beard trims, hot towel
              shaves. Be sure to call us for more information.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default AboutSection;
