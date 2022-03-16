import Image from "next/image";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import styles from "../styles/Photo.module.css";
import b1 from "../public/images/b1.jpg";
import b3 from "../public/images/b3.jpg";
import b4 from "../public/images/b4.jpg";
import b5 from "../public/images/b5.jpg";
import b6 from "../public/images/b6.jpg";
import b7 from "../public/images/b7.jpg";
import { motion } from "framer-motion";

function Photos() {
  return (
    <div className={styles.container}>
      <section className={styles.photosContainer} id='photos'>
        <div className={styles.topContainer}>
          <h2 className={styles.heading}>Our Work</h2>
          <div className={styles.btnContainer}>
            <Link href='/gallery' passHref>
              <span className={styles.link}>
                <a>Read More</a>
                <CgArrowLongRight className={styles.icon1} />
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.box1}>
            <Image
              src={b1}
              alt='baerber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className={styles.box2}>
            <Image
              src={b3}
              alt='baerber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <Link href='/services/#beards' passHref>
            <motion.div whileTap={{ scale: 0.9 }} className={styles.box3}>
              <h5>Beards</h5>

              <a>
                <CgArrowLongRight className={styles.icon} />
              </a>
            </motion.div>
          </Link>
          <Link href='/services/#haircuts' passHref>
            <motion.div whileTap={{ scale: 0.9 }} className={styles.box4}>
              <h5>Hair Cuts</h5>

              <a>
                <CgArrowLongRight className={styles.icon} />
              </a>
            </motion.div>
          </Link>
          <div className={styles.box5}>
            <Image
              src={b4}
              alt='barber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <div className={styles.boxContainer2}>
          <div className={styles.box1B}>
            <Image
              src={b5}
              alt='barber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <Link href='/services/#children' passHref>
            <motion.div whileTap={{ scale: 0.9 }} className={styles.box2B}>
              <h5>Children</h5>

              <a>
                <CgArrowLongRight className={styles.icon} />
              </a>
            </motion.div>
          </Link>
          <div className={styles.box3B}>
            <Image
              src={b6}
              alt='baerber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <Link href='/services/#haircuts' passHref>
            <motion.div whileTap={{ scale: 0.9 }} className={styles.box4B}>
              <h5>Hair Cuts</h5>

              <a>
                <CgArrowLongRight className={styles.icon} />
              </a>
            </motion.div>
          </Link>
          <div className={styles.box5B}>
            <Image
              src={b7}
              alt='baerber image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Photos;
