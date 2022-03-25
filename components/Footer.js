import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { GiRazor } from "react-icons/gi";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <section className={styles.footerContainer}>
      <footer className={styles.footerBottom}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <Link href='/' passHref>
              <span className={styles.navbarLogo}>
                <GiRazor className={styles.navbarIcon} />
                <a>RAZOR EDGE</a>
              </span>
            </Link>
            <p lang='en'>
              Expand on the keyword with more keywords and add a list of related
              services that you do and include the city, state of your service
              area.
            </p>
            <div className={styles.sci}>
              <GrFacebookOption className={styles.icon} />
              <BsInstagram className={styles.icon} />
              <FiYoutube className={styles.icon3} />
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.list1}>
              <h6 className={styles.heading}>Services</h6>
              <ul>
                <Link href='/' passHref>
                  <li>Beards</li>
                </Link>
                <li>Mustashes</li>
                <li>Hair Cuts</li>
                <li>Kids</li>
              </ul>
            </div>
            <div className={styles.list2}>
              <h6 className={styles.heading}>About</h6>
              <ul>
                <Link href='/' passHref>
                  <li>Our Story</li>
                </Link>
                <li>Barbers</li>
                <li>Location</li>
                <li>Prices</li>
              </ul>
            </div>
            <div className={styles.list3}>
              <h6 className={styles.heading}>Contact</h6>
              <ul>
                <Link href='/' passHref>
                  <li>Address</li>
                </Link>
                <li>Email</li>
                <li>Phone</li>
                <li>Insta</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.copyrightContainer}>
          <small>
            Gentelman's {new Date().getFullYear()} &copy; - All Rights Reserved
            || Designed/Developed by{" "}
            <Link href='https://chrisware.io' passHref>
              <a className={styles.cw} target='_blank'>
                Chris Ware
              </a>
            </Link>
          </small>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
