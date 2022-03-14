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
              Lorem Khaled Ipsum is a major key to success. Don’t ever play
              yourself. Mogul talk. The key is to drink coconut, fresh coconut,
              trust me. Celebrate success right, the only way, apple. They never
              said winning was easy. Some people can’t handle success, I can.
              It’s on you how you want to live your life. Everyone has a choice.
              I pick my choice, squeaky clean. Put it this way, it took me
              twenty five years to get these plants, twenty five years of blood
              sweat and tears, and I’m never giving up, I’m just getting
              started. The key to success is to keep your head above the water,
              never give up. Always remember in the jungle there’s a lot of they
              in there, after you overcome they, you will make it to paradise.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default AboutSection;
