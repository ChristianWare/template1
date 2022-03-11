import styles from "../styles/servicesPage.module.css";

function services() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.topContent}>
        <h1 className={styles.heading}>Premium Quality Services & Price List.</h1>
        <h5>
          We offer affordable services, and the quality/cost ratio is the best
          in the business. At our shop, you will get your money's worth of
          service. We welcome you to walk in or schedule an appointment today.
        </h5>
      </div>
      <div className={styles.contentBottom}>
        <div className={styles.contentLeft}>
          <div class={styles.row}>
            <h6 class={styles.left}>Regular Haircut</h6>
            <span class={styles.separator}></span>
            <h6 class={styles.right}>$25</h6>
          </div>
          <div class={styles.row}>
            <h6 class={styles.left}>Fade</h6>
            <span class={styles.separator}></span>
            <h6 class={styles.right}>$27</h6>
          </div>
          <div class={styles.row}>
            <h6 class={styles.left}>Kids Haircut</h6>
            <span class={styles.separator}></span>
            <h6 class={styles.right}>$20</h6>
          </div>
          <div class={styles.row}>
            <h6 class={styles.left}>Kids Fade</h6>
            <span class={styles.separator}></span>
            <h6 class={styles.right}>$24</h6>
          </div>
          <div class={styles.row}>
            <h6 class={styles.left}>Senior Haircut</h6>
            <span class={styles.separator}></span>
            <h6 class={styles.right}>$20</h6>
          </div>
          <div class={styles.row}>
            <h6 class={styles.left}>Shape Up</h6>
            <span class={styles.separator}></span>
            <h6 class={styles.right}>$15</h6>
          </div>
        </div>
        <div className={styles.contentRight}>
          <div class={styles.row}>
            <h6 class={styles.left}>Beard Trim</h6>
            <span class={styles.separator}></span>
            <h6 class={styles.right}>$15</h6>
          </div>
          <div class={styles.row}>
            <h6 class={styles.left}>Head Shave</h6>
            <span class={styles.separator}></span>
            <h6 class={styles.right}>$30</h6>
          </div>
          <div class={styles.row}>
            <h6 class={styles.left}>Hot Towel Shave</h6>
            <span class={styles.separator}></span>
            <h6 class={styles.right}>$32</h6>
          </div>
          <div class={styles.row}>
            <h6 class={styles.left}>Face Mask</h6>
            <span class={styles.separator}></span>
            <h6 class={styles.right}>$29</h6>
          </div>
          <div class={styles.row}>
            <h6 class={styles.left}>Senior Fade</h6>
            <span class={styles.separator}></span>
            <h6 class={styles.right}>$20</h6>
          </div>
          <div class={styles.row}>
            <h6 class={styles.left}>Woman's Haircut</h6>
            <span class={styles.separator}></span>
            <h6 class={styles.right}>$27</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
