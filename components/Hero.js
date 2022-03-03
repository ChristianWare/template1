import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Button from "./utils/Button";
import img1 from "../public/images/b3.jpg";

function Hero() {
  return (
    <header className={styles.heroContainer}>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <h1 className={styles.heading}>
            Main headline, put top keyword here.
          </h1>
          <p className={styles.description}>
            Expand on the keyword with more keywords and add a list of related
            services that you do and include the city, state of your service
            area.
          </p>
          <div className={styles.btnContainer}>
            <Button text='contact' href='/' color='primary' />
            <Button text='services' href='/' color='primaryOutline' />
          </div>
        </div>
        <div className={styles.contentRight}>
          <picture>
            <Image
              src={img1}
              alt=''
              width={367}
              height={500}
              className={styles.heroImage}
            />
          </picture>
        </div>
      </div>
    </header>
  );
}

export default Hero;
