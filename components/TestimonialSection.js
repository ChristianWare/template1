import Link from "next/link";
import Image from "next/image";
import styles from "../styles/TestimonialSection.module.css";
import { CgArrowLongRight } from "react-icons/cg";

function TestimonialSection() {
  return (
    <section className={styles.testContainer}>
      <div className={styles.topContent}>
        <h2>Testimonials</h2>
        <Link href='/'>
          <span className={styles.link}>
            <a>See All Testimonials</a>
            <CgArrowLongRight className={styles.icon} />
          </span>
        </Link>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.bottomContentA}>
          <picture className={styles.img1}>Image Goes Here</picture>
          <div className={styles.testBox1}>
            <p className={styles.test}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              rerum, dolor veritatis animi adipisci ratione maxime nisi sunt.
              Animi, doloremque.
            </p>
          </div>
        </div>
        <div className={styles.bottomContentB}>
          <div className={styles.testBox2}>
            <p className={styles.test}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              rerum, dolor veritatis animi adipisci ratione maxime nisi sunt.
              Animi, doloremque.
            </p>
          </div>
          <picture className={styles.img2}>Image Goes Here</picture>
        </div>
        <div className={styles.bottomContentA}>
          <picture className={styles.img1}>Image Goes Here</picture>
          <div className={styles.testBox1}>
            <p className={styles.test}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              rerum, dolor veritatis animi adipisci ratione maxime nisi sunt.
              Animi, doloremque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
