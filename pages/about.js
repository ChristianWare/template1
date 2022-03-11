import styles from '../styles/aboutPage.module.css'

function about() {
    return (
      <div className={styles.servicesContainer}>
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
        <div className={styles.contentBottom}></div>
      </div>
    );
}

export default about
