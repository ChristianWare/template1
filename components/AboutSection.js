import Link from "next/link";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import styles from "../styles/AboutSection.module.css";
import b6 from "../public/images/b6.jpg";
import { motion } from "framer-motion";

function AboutSection() {

  return (
    <div className={styles.container}>
      <section
        className={styles.AboutSectionContainer}
      >
        <div
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
        </div>
        <div
          className={styles.contentRight}
        >
          <div className={styles.contentRightA}>
            <h2 className={styles.heading}>Our Origin Story</h2>

            <div className={styles.btnContainer}>
              <Link href='/about' passHref>
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
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
