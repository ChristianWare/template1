import Link from "next/link";
import Image from "next/image";
import styles from "../styles/TestimonialSection.module.css";
import { CgArrowLongRight } from "react-icons/cg";
import b12 from '../public/images/b12.jpg'
import b13 from '../public/images/b13.jpg'
import b14 from '../public/images/b14.jpg'

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
          <picture className={styles.img1}>
            <Image src={b14} layout='fill' objectFit='cover' />
          </picture>
          <div className={styles.testBox1}>
            <p className={styles.test}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              rerum.
            </p>
          </div>
        </div>
        <div className={styles.bottomContentB}>
          <div className={styles.testBox2}>
            <p className={styles.test}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              rerum.
            </p>
          </div>
          <picture className={styles.img2}>
            <Image src={b13} layout='fill' objectFit='cover' />
          </picture>
        </div>
        <div className={styles.bottomContentA}>
          <picture className={styles.img1}>
            <Image src={b12} layout='fill' objectFit='cover' />
          </picture>
          <div className={styles.testBox3}>
            <p className={styles.test}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              rerum, dolor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
