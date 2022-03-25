import Image from "next/image";
import styles from "../styles/servicesPage.module.css";
import {
  adultLeft,
  adultRight,
  beardsLeft,
  beardsRight,
  childrenLeft,
  childrenRight,
} from "../src/data";
import b9 from "../public/images/b9.jpg";
import Prefooter from "../components/Prefooter";
import { motion } from "framer-motion";
import { imageAnimation } from "../components/Animation";
import SEO from "../components/SEO";

function services() {

  return (
    <>
      <SEO
        title='Gentelmans || Services'
        description='Welcome to the Services of XYZ, take a look at our services and prices.'
      />
      <div className={styles.container}>
        <motion.div
          animate={{ opacity: 1, transition: { duration: 1 } }}
          initial={{ opacity: 0 }}
          className={styles.servicesContainer}
        >
          <div className={styles.topContent}>
            <div className={styles.topLeft}>
              <h1 className={styles.heading}>
                Premium Quality Services & Price List.
              </h1>
              <p lang='en'>
                We offer affordable services, and the quality/cost ratio is the
                best in the business. At our shop, you will get your
                money&apos;s worth of service. We welcome you to walk in or
                schedule an appointment today.
              </p>
            </div>
            <motion.div
              variants={imageAnimation}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              className={styles.topRight}
            >
              <div
                variants={imageAnimation}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                className={styles.topImgContainer}
              >
                <Image
                  src={b9}
                  alt='barber with scissors'
                  objectFit='cover'
                  width={500}
                  height={500}
                />
              </div>
            </motion.div>
          </div>
          <h2 className={styles.sectionHeader} id='haircuts'>
            Hair Cuts
          </h2>
          <div className={styles.contentBottom1}>
            <div className={styles.contentLeft}>
              {adultLeft.map((menu) => (
                <div key={menu.id} className={styles.row}>
                  <h6 className={styles.left}>{menu.item}</h6>
                  <span className={styles.separator}></span>
                  <h6 className={styles.right}>{menu.price}</h6>
                </div>
              ))}
            </div>
            <div className={styles.contentRight}>
              {adultRight.map((menu) => (
                <div key={menu.id} className={styles.row}>
                  <h6 className={styles.left}>{menu.item}</h6>
                  <span className={styles.separator}></span>
                  <h6 className={styles.right}>{menu.price}</h6>
                </div>
              ))}
            </div>
          </div>
          <h2 className={styles.sectionHeader} id='beards'>
            Beards
          </h2>
          <div className={styles.contentBottom2}>
            <div className={styles.contentLeft}>
              {beardsLeft.map((menu) => (
                <div key={menu.id} className={styles.row}>
                  <h6 className={styles.left}>{menu.item}</h6>
                  <span className={styles.separator2}></span>
                  <h6 className={styles.right}>{menu.price}</h6>
                </div>
              ))}
            </div>
            <div className={styles.contentRight}>
              {beardsRight.map((menu) => (
                <div key={menu.id} className={styles.row}>
                  <h6 className={styles.left}>{menu.item}</h6>
                  <span className={styles.separator2}></span>
                  <h6 className={styles.right}>{menu.price}</h6>
                </div>
              ))}
            </div>
          </div>
          <h2 className={styles.sectionHeader} id='children'>
            Children
          </h2>
          <div className={styles.contentBottom3}>
            <div className={styles.contentLeft}>
              {childrenLeft.map((menu) => (
                <div key={menu.id} className={styles.row}>
                  <h6 className={styles.left}>{menu.item}</h6>
                  <span className={styles.separator}></span>
                  <h6 className={styles.right}>{menu.price}</h6>
                </div>
              ))}
            </div>
            <div className={styles.contentRight}>
              {childrenRight.map((menu) => (
                <div key={menu.id} className={styles.row}>
                  <h6 className={styles.left}>{menu.item}</h6>
                  <span className={styles.separator}></span>
                  <h6 className={styles.right}>{menu.price}</h6>
                </div>
              ))}
            </div>
          </div>
          <Prefooter text='Questions? Give Us A Call!' />
        </motion.div>
      </div>
    </>
  );
}

export default services;
