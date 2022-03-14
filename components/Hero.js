import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Button from "./utils/Button";
import img1 from "../public/images/b3.jpg";

function Hero() {

  const map =
    "https://www.google.com/maps/place/5100+N+99th+Ave,+Phoenix,+AZ+85037/@33.509981,-112.2757085,17z/data=!3m1!4b1!4m5!3m4!1s0x872b4172f9f02973:0x4dc3ba54f817a0fa!8m2!3d33.509981!4d-112.2735198";

  return (
    <header className={styles.heroContainer}>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <h1 className={styles.heading}>
            Main headline, put top keyword here.
          </h1>
          <h5 className={styles.description} lang='en'>
            Expand on the keyword with more keywords and add a list of related
            services that you do and include the city, state of your service
            area.
          </h5>
          <div className={styles.infoBox}>
            <p className={styles.hours}>Monday - Saturday 9AM - 6PM</p>
            <a href={map} target='_blank'>
              <address className={styles.address}>
                5100 w Camelback Rd<br />
                Phoenix, AZ 85334
              </address>
            </a>
          </div>
          <div className={styles.btnContainer}>
            <Button text='contact' href='/#contact' color='primary' />
            <Button text='services' href='/services' color='primaryOutline2' />
          </div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.imageContainer2}>
            <Image
              src={img1}
              alt=''
              width={400}
              height={500}
              objectFit='cover'
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
