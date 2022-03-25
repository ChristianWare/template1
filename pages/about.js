import Image from "next/image";
import styles from "../styles/aboutPage.module.css";
import b7 from "../public/images/b8.jpg";
import b15 from "../public/images/b15.jpg";
import b16 from "../public/images/b16.jpg";
import b17 from "../public/images/b12.jpg";
import Prefooter from "../components/Prefooter";
import { motion } from "framer-motion";
import SEO from '../components/SEO'

function about() {
  return (
    <>
      <SEO
        title='Gentelmans || About Us'
        description='Welcome to the About US Page of XYZ. Learn more about our history and our barbers.'
      />
      <div className={styles.container}>
        <motion.section
          animate={{ opacity: 1, transition: { duration: 1 } }}
          initial={{ opacity: 0 }}
          className={styles.servicesContainer}
        >
          <div className={styles.topContent}>
            <h1 className={styles.heading}>About Us.</h1>
            <h5 lang='en'>
              We believe that going to the barber shop should be more than an
              errand. It should be an experience. It’s important to us that you
              get a great haircut, receive remarkable service and build lasting
              relationships in a comfortable space. We are committed to being an
              inclusive and welcoming environment for every client and member of
              our team.
            </h5>
          </div>

          <div className={styles.contentbottom}>
            <div className={styles.left}>
              <div className={styles.contentLeftA}>
                <h2 className={styles.subHeading}>Our Story</h2>
                <p className={styles.subHeadingDescription} lang='en'>
                  Our barber shop is dedicated for men to relax, freshen their
                  style, and be pampered. Elegant offers a wide range of
                  barbering services including detailed men’s haircuts such as
                  fades, flat tops, tapers, layered haircuts. and a variety of
                  other services such as precise straight razor shaves, beard
                  trims, hot towel shaves. Be sure to call us for more
                  information.
                </p>
              </div>
            </div>
            <div className={styles.right}>
              <picture className={styles.contentRightA}>
                <Image
                  src={b7}
                  alt=''
                  width={475}
                  height={475}
                  objectFit='cover'
                  className={styles.look}
                />
              </picture>
            </div>
          </div>
          <div className={styles.contentBottom2}>
            <div className={styles.ourppl}>
              <h2 className={styles.subHeading2}>Our People</h2>
              <p className={styles.subP}>
                Our shop has a team of dedicated Barbers who&apos;s ambition is
                helping their clients increase their confidence by helping them
                disover thier look. Let&apos;s meet them:
              </p>
            </div>

            <div className={styles.contentbottom3}>
              <div className={styles.left}>
                <div className={styles.contentLeftA}>
                  <h2 className={styles.subHeading}>Dave</h2>
                  <p className={styles.subHeadingDescription} lang='en'>
                    Dave has been cutting professionally for the last 10 years.
                    He started cutting in High school, at the age of 16. Ever
                    since then, he has mastered his craft, and is a proud member
                    of our team.
                  </p>
                </div>
              </div>
              <div className={styles.right}>
                <picture className={styles.contentRightA}>
                  <Image
                    src={b15}
                    alt=''
                    width={475}
                    height={475}
                    objectFit='cover'
                  />
                </picture>
              </div>
            </div>
            <div className={styles.contentbottom4}>
              <div className={styles.left}>
                <div className={styles.contentLeftA}>
                  <h2 className={styles.subHeading}>Mike</h2>
                  <p className={styles.subHeadingDescription} lang='en'>
                    Mike has been cutting professionally for the last 10 years.
                    He started cutting in High school, at the age of 16. Ever
                    since then, he has mastered his craft, and is a proud member
                    of our team.
                  </p>
                </div>
              </div>
              <div className={styles.right}>
                <picture className={styles.contentRightA}>
                  <Image
                    src={b16}
                    alt=''
                    width={475}
                    height={475}
                    objectFit='cover'
                  />
                </picture>
              </div>
            </div>
            <div className={styles.contentbottom5}>
              <div className={styles.left}>
                <div className={styles.contentLeftA}>
                  <h2 className={styles.subHeading}>Jason</h2>
                  <p className={styles.subHeadingDescription} lang='en'>
                    Jason has been cutting professionally for the last 10 years.
                    He started cutting in High school, at the age of 16. Ever
                    since then, he has mastered his craft, and is a proud member
                    of our team.
                  </p>
                </div>
              </div>
              <div className={styles.right}>
                <picture className={styles.contentRightA}>
                  <Image
                    src={b17}
                    alt=''
                    width={475}
                    height={475}
                    objectFit='cover'
                  />
                </picture>
              </div>
            </div>
          </div>
          <Prefooter text='Call Us to Learn More!' />
        </motion.section>
      </div>
    </>
  );
}

export default about;
