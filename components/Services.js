import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Services.module.css";
import b1 from '../public/images/b1.jpg'
import b2 from '../public/images/b2.jpg'
import b3 from '../public/images/b3.jpg'
import { CgArrowLongRight } from 'react-icons/cg'

function Services() {
  return (
    <section className={styles.servicesContainer}>
      <div className={styles.topContent}>
        <h2>Our Services</h2>
        <Link href='/'>
          <span className={styles.link}>
            <a>See All Services</a>
            <CgArrowLongRight className={styles.icon} />
          </span>
        </Link>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.cardOne}>
          <h4 className={styles.cardheading}>Service One Title</h4>
          <p className={styles.cardDescription} lang='en'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur voluptate nam quas? Veritatis, dolorem, incidunt.
          </p>
          <div className={styles.placeHolderImage}>
            {/* <Image
              src={b3}
              alt=''
              width={350}
              height={350}
              objectFit='cover'
              className={styles.img}
            /> */}
            <div className={styles.circle}></div>
          </div>
        </div>
        <div className={styles.cardTwo}>
          <h4 className={styles.cardheading}>Service Two Title</h4>
          <p className={styles.cardDescription} lang='en'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur voluptate nam quas? Veritatis, dolorem, incidunt.
          </p>
          <div className={styles.placeHolderImage}>
            {/* <Image
              src={b2}
              alt=''
              width={3500}
              height={3500}
              objectFit='cover'
              className={styles.img}
            /> */}
            <div className={styles.circle2}></div>
          </div>
        </div>
        <div className={styles.cardThree}>
          <h4 className={styles.cardheading}>Service Three Title</h4>
          <p className={styles.cardDescription} lang='en'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur voluptate nam quas? Veritatis, dolorem, incidunt.
          </p>
          <div className={styles.placeHolderImage}>
            {/* <Image
              src={b1}
              alt=''
              width={350}
              height={350}
              objectFit='cover'
              className={styles.img}
            /> */}
            <div className={styles.circle3}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
