import Image from "next/image";
import styles from "../styles/aboutPage.module.css";
import b7 from "../public/images/b8.jpg";
import b15 from "../public/images/b15.jpg";
import b16 from "../public/images/b16.jpg";
import b17 from "../public/images/b12.jpg";
import Prefooter from "../components/Prefooter";

function about() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.topContent}>
        <h1 className={styles.heading}>About Us.</h1>
        <h5 lang='en'>
          We believe that going to the barber shop should be more than an
          errand. It should be an experience. It’s important to us that you get
          a great haircut, receive remarkable service and build lasting
          relationships in a comfortable space. We are committed to being an
          inclusive and welcoming environment for every client and member of our
          team.
        </h5>
      </div>

      <div className={styles.contentbottom}>
        <div className={styles.left}>
          <div className={styles.contentLeftA}>
            <h2 className={styles.subHeading}>Our Story</h2>
            <p className={styles.subHeadingDescription} lang='en'>
              Our barber shop is dedicated for men to relax, freshen their
              style, and be pampered. Elegant offers a wide range of barbering
              services including detailed men’s haircuts such as
              fades, flat tops, tapers, layered haircuts. and a variety of other
              services such as precise straight razor shaves, beard trims, hot
              towel shaves. Be sure to call us for more
              information. Every service we offer comes with a complimentary
              drink, because we’re much more than a barbershop.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <picture className={styles.contentRightA}>
            <Image src={b7} alt='' objectFit='cover' />
          </picture>
        </div>
      </div>
      <div className={styles.contentBottom2}>
        <h2 className={styles.subHeading2}>Our People</h2>
        <p className={styles.subP}>
          Our shop has a team of dedicated Barbers who's ambition is helping
          their clients increase their confidence by helping them disover thier
          look. Let's meet them:
        </p>
        <div className={styles.imageBox}>
          <picture className={styles.img1}>
            <Image src={b15} alt='' height={600} objectFit='cover' />
            <h5 className={styles.name}>Dave</h5>
            <p className={styles.profile}>
              Dave has been cutting professionally for the last 10 years. He
              started cutting in High school, at the age of 16. Ever since then,
              he has mastered his craft, and is a proud member of our team.
            </p>
          </picture>
          <picture className={styles.img2}>
            <Image src={b16} alt='' height={600} objectFit='cover' />
            <h5 className={styles.name}>Mike</h5>
            <p className={styles.profile}>
              Mike has been cutting professionally for the last 10 years. He
              started cutting in High school, at the age of 16. Ever since then,
              he has mastered his craft, and is a proud member of our team.
            </p>
          </picture>
          <picture className={styles.img3}>
            <Image src={b17} alt='' height={600} objectFit='cover' />
            <h5 className={styles.name}>Jason</h5>
            <p className={styles.profile}>
              Jason has been cutting professionally for the last 10 years. He
              started cutting in High school, at the age of 16. Ever since then,
              he has mastered his craft, and is a proud member of our team.
            </p>
          </picture>
        </div>
      </div>
      <Prefooter text='Call Us to Learn More!' />
    </div>
  );
}

export default about;
