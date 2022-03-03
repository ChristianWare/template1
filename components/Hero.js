import styles from "../styles/Hero.module.css";
import Button from "./utils/Button";

function Hero() {
  return (
    <header className={styles.heroContainer}>
      <div className={styles.content1}>
        <div className={styles.content1A}>
          <h1>Main headline, put top keyword here.</h1>
        </div>
        <div className={styles.content1B}>
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
      </div>
      <div className={styles.content2}></div>
      <div className={styles.content3}></div>
    </header>
  );
}

export default Hero;
