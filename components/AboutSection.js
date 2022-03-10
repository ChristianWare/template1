import Link from "next/link";
import Image from "next/image";
import { CgArrowLongRight } from 'react-icons/cg'
import styles from "../styles/AboutSection.module.css";
import b6 from "../public/images/b6.jpg";


function AboutSection() {
  return (
    <section className={styles.AboutSectionContainer}>
      <div className={styles.contentLeft}>
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
      <div className={styles.contentRight}>
        <div className={styles.contentRightA}>
          <h2>Our Origin Story</h2>

          <div className={styles.btnContainer}>
            <Link href='/'>
              <span className={styles.link}>
                <a>Read More About Us</a>
                <CgArrowLongRight className={styles.icon} />
              </span>
            </Link>
          </div>
          <p className={styles.contnetRightDesciption}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            ratione neque harum delectus obcaecati aliquam veniam perferendis in
            culpa fugit ex sit eos tenetur libero vitae magnam labore
            repellendus! Reprehenderit!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            ratione neque harum delectus obcaecati aliquam veniam perferendis in
            culpa fugit ex sit eos tenetur libero vitae magnam labore
            repellendus! Reprehenderit!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
