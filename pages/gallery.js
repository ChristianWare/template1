import styles from "../styles/gallery.module.css";
import Prefooter from "../components/Prefooter";
import { motion } from "framer-motion";

function gallery() {
  return (
    <div className={styles.container}>
      <section className={styles.galleryContainer}>
        <motion.div
          animate={{ opacity: 1, transition: { duration: 1 } }}
          initial={{ opacity: 0 }}
          className={styles.topContent}
        >
          <h1 className={styles.heading}>Gallery.</h1>
          <h5 lang='en'>
            We believe that going to the barber shop should be more than an
            errand. It should be an experience. It’s important to us that you
            get a great haircut, receive remarkable service and build lasting
            relationships in a comfortable space. We are committed to being an
            inclusive and welcoming environment for every client and member of
            our team.
          </h5>
        </motion.div>

        <Prefooter text='picture perfect!' />
      </section>
    </div>
  );
}

export default gallery;
