import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Button from "./utils/Button";
import img1 from "../public/images/b3.jpg";
import { motion } from "framer-motion";
import SEO from "./SEO";

function Hero() {
  const map =
    "https://www.google.com/maps/place/5100+N+99th+Ave,+Phoenix,+AZ+85037/@33.509981,-112.2757085,17z/data=!3m1!4b1!4m5!3m4!1s0x872b4172f9f02973:0x4dc3ba54f817a0fa!8m2!3d33.509981!4d-112.2735198";

  return (
    <>
      <SEO
        title='Crew Cuts'
        description='Welcome to the homepage of XYZ, the only place to get all of your XYZ Needs.'
      />
      <div className={styles.container}>
        <header className={styles.heroContainer}>
          <motion.div
            animate={{ opacity: 1, transition: { duration: 1 } }}
            initial={{ opacity: 0 }}
            className={styles.content}
          >
            <div className={styles.contentLeft}>
              <h1 className={styles.heading}>
                WELCOME TO Crew Cuts BARBER SHOP.
              </h1>
              <h5 className={styles.description} lang='en'>
                The only Barbershop in The Phoenix Area to get the best Fades
                and Flat Tops.
              </h5>

              <div className={styles.infoBox}>
                <p className={styles.hours}>Monday - Saturday 9AM - 6PM</p>
                <a href={map} target='_blank' rel='noreferrer'>
                  <address className={styles.address}>
                    5100 w Camelback Rd
                    <br />
                    Phoenix, AZ 85334
                  </address>
                </a>
              </div>
              <div className={styles.btnContainer}>
                <Button
                  text='contact'
                  href='/#contact'
                  color='primary'
                  className={styles.btnn}
                />
                <Button
                  text='services'
                  href='/services'
                  color='primaryOutline2'
                />
              </div>
            </div>
            <div className={styles.contentRight}>
              <picture className={styles.imageContainer2}>
                <Image
                  src={img1}
                  alt=''
                  width={400}
                  height={500}
                  objectFit='cover'
                />
              </picture>
            </div>
          </motion.div>
        </header>
      </div>
    </>
  );
}

export default Hero;
