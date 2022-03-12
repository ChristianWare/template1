import styles from '../styles/Prefooter.module.css'
import Button from "./utils/Button";

function Prefooter({ text }) {
    return (
      <div className={styles.footerTop}>
        <div className={styles.footerTopContent}>
          <h5 lang='en'>{text}</h5>
          <div className={styles.btnContainer}>
            <Button text='Get Quote' href='/' color='primary' btnSz='large' />
          </div>
        </div>
        <article className={styles.footerTopContent2}></article>
        <article className={styles.footerTopContent3}></article>
      </div>
    );
}

export default Prefooter
