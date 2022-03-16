import Prefooter from "../components/Prefooter";
import Button from "../components/utils/Button";
import styles from "../styles/404.module.css";

function notFoundPage() {
  return (
    <section className={styles.container}>
      <div className={styles.topContent}>
        <h1 className={styles.heading}>404 error</h1>
        <h5 lang='en'>This is not the page you are looking for.</h5>
        <div className={styles.btnContainer}>
          <Button text='Home' color='primary' btnSz='large' href='/' />
          <Button text='services' color='primaryOutline2' btnSz='large' href='/services' />
        </div>
      </div>

      <Prefooter text='How did you get here?' />
    </section>
  );
}

export default notFoundPage;
