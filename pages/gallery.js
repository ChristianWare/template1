import styles from "../styles/gallery.module.css";
import Prefooter from "../components/Prefooter";
import { motion } from "framer-motion";
import { images } from "../src/data";
import Image from "next/image";
import SEO from "../components/SEO";

function gallery() {
  return (
    <>
      <SEO
        title='Gentelmans || Gallery'
        description='Welcome to the Gallery Page of XYZ. See our work through our photos.'
      />
      <div className={styles.container}>
        <section className={styles.galleryContainer}>
          <motion.div
            animate={{ opacity: 1, transition: { duration: 1 } }}
            initial={{ opacity: 0 }}
            className={styles.topContent}
          >
            <h1 className={styles.heading}>Gallery.</h1>
            <h5 lang='en'>
              Here are some examples of our work. We are pround to show the work
              that we have done over the years. Thank you to all of our loyal
              clients who make all of this possible. Below you find some images
              of the best clients that any barber can ask for.
            </h5>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, transition: { duration: 1 } }}
            initial={{ opacity: 0 }}
            className={styles.map}
          >
            {images.map((img) => {
              const { id, imageName, tag } = img;
              return (
                <article key={id}>
                  <div className={styles.photoContainer}>
                    <Image
                      src={`/images/${imageName}`}
                      alt={imageName}
                      layout='fill'
                      objectFit='cover'
                      className={styles.img}
                    />
                  </div>
                </article>
              );
            })}
          </motion.div>

          <Prefooter text='picture perfect!' />
        </section>
      </div>
    </>
  );
}

export default gallery;
