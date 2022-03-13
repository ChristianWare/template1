import styles from '../styles/Prefooter.module.css'
import Button from "./utils/Button";

function Prefooter({ text }) {
    return (
      <div className={styles.prefooterContainer}>
        <div className={styles.content}>
          <h5 lang='en'>{text}</h5>
          <div className={styles.btnContainer}>
            <Button text='Get Quote' href='/' color='primary' btnSz='large' />
            <Button text='Get Quote' href='/' color='primaryOutline2' btnSz='large' />
          </div>
        </div>
        <article className={styles.content2}></article>
        <article className={styles.content3}></article>
      </div>
    );
}

export default Prefooter
