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

function services() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.topContent}>
        <div className={styles.topLeft}>
          <h1 className={styles.heading}>
            Premium Quality Services & Price List.
          </h1>
          <p lang='en'>
            We offer affordable services, and the quality/cost ratio is the best
            in the business. At our shop, you will get your money's worth of
            service. We welcome you to walk in or schedule an appointment today.
          </p>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topImgContainer}>
            <Image src={b9} objectFit='cover' width={500} height={500} />
          </div>
        </div>
      </div>
      <h2 className={styles.sectionHeader}>Hair Cuts</h2>
      <div className={styles.contentBottom1}>
        <div className={styles.contentLeft}>
          {adultLeft.map((menu) => (
            <div key={menu.id} class={styles.row}>
              <h6 className={styles.left}>{menu.item}</h6>
              <span className={styles.separator}></span>
              <h6 className={styles.right}>$25</h6>
            </div>
          ))}
        </div>
        <div className={styles.contentRight}>
          {adultRight.map((menu) => (
            <div key={menu.id} class={styles.row}>
              <h6 className={styles.left}>{menu.item}</h6>
              <span className={styles.separator}></span>
              <h6 className={styles.right}>$25</h6>
            </div>
          ))}
        </div>
      </div>
      <h2 className={styles.sectionHeader}>Beards</h2>
      <div className={styles.contentBottom2}>
        <div className={styles.contentLeft}>
          {beardsLeft.map((menu) => (
            <div key={menu.id} class={styles.row}>
              <h6 className={styles.left}>{menu.item}</h6>
              <span className={styles.separator2}></span>
              <h6 className={styles.right}>$25</h6>
            </div>
          ))}
        </div>
        <div className={styles.contentRight}>
          {beardsRight.map((menu) => (
            <div key={menu.id} class={styles.row}>
              <h6 className={styles.left}>{menu.item}</h6>
              <span className={styles.separator2}></span>
              <h6 className={styles.right}>$25</h6>
            </div>
          ))}
        </div>
      </div>
      <h2 className={styles.sectionHeader}>Children</h2>
      <div className={styles.contentBottom3}>
        <div className={styles.contentLeft}>
          {childrenLeft.map((menu) => (
            <div key={menu.id} class={styles.row}>
              <h6 className={styles.left}>{menu.item}</h6>
              <span className={styles.separator}></span>
              <h6 className={styles.right}>$25</h6>
            </div>
          ))}
        </div>
        <div className={styles.contentRight}>
          {childrenRight.map((menu) => (
            <div key={menu.id} class={styles.row}>
              <h6 className={styles.left}>{menu.item}</h6>
              <span className={styles.separator}></span>
              <h6 className={styles.right}>$25</h6>
            </div>
          ))}
        </div>
      </div>
      <Prefooter text='Questions? Give Us A Call!' />
    </div>
  );
}

export default services;
