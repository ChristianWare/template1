import styles from "../styles/ContactSection.module.css";
import Button from './utils/Button'

function ContactSection() {
  return (
    <section className={styles.contactContainer}>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <h3 className={styles.heading}>It's never too early to start planning your next hair cut!</h3>
          <address className={styles.address}>
          85448 e Thompson Rd <br />
          Goodyear, AZ 85338
          </address>
          <p>602-778-8787</p>
          <p>email: baber@gmail.com</p>
          
        </div>
        <div className={styles.contentRight}>
        Form Details will go here
        <div className={styles.btnContainer}>
            <Button text='submit' href='/' color='secondary'   />
        </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
