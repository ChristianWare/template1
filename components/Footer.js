import styles from "../styles/Footer.module.css";
import Button from "./utils/Button";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopContent}>
          <h5>Satisfaction Guaranteed. Reach out to us today!</h5>
          <div className={styles.btnContainer}>
            <Button text='Get Quote' href='/' color='primary' btnSz='small' />
            <Button
              text='See All Plans'
              href='/'
              color='primaryOutline'
              btnSz='small'
            />
          </div>
        </div>
        <article className={styles.footerTopContent2}></article>
        <article className={styles.footerTopContent3}></article>
      </div>
      <div className={styles.footerBottom}>Bottom Content</div>
    </footer>
  );
}

export default Footer;
