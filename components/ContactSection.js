import styles from "../styles/ContactSection.module.css";
import Button from "./utils/Button";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { cardAnimation } from './Animation'

function ContactSection() {
  const [element, controls] = useScroll();

  return (
    <section className={styles.contactContainer} id='contact' ref={element}>
      <motion.div
        variants={cardAnimation}
        animate={controls}
        transition={{ duration: .3, type: "tween"}}
        className={styles.container}
      >
        <div className={styles.contactInfo}>
          <div className={styles.unnammed}>
            <h2>Contact Info</h2>
            <ul className={styles.info}>
              <li>
                <span>
                  <MdOutlineLocationOn className={styles.icon} />
                </span>
                <span>
                  2912 MedowBrooke Road <br />
                  Los Angeles, CA <br />
                  90017
                </span>
              </li>
              <li>
                <span>
                  <AiOutlineMail className={styles.icon} />
                </span>
                <span>lorem@ipsum.com</span>
              </li>
              <li>
                <span>
                  <BsTelephoneForward className={styles.icon} />
                </span>
                <span>602-558-8888</span>
              </li>
            </ul>
          </div>
          <ul className={styles.sci}>
            <li>
              <GrFacebookOption className={styles.icon} />
            </li>
            <li>
              <BsInstagram className={styles.icon} />
            </li>
            <li>
              <FiYoutube className={styles.icon} />
            </li>
          </ul>
        </div>
        <div className={styles.contactForm}>
          <h2>Send A Message</h2>
          <div className={styles.formBox}>
            <div className={styles.inputBox50}>
              <input type='text' required />
              <span>First Name</span>
            </div>
            <div className={styles.inputBox50}>
              <input type='text' required />
              <span>Last Name</span>
            </div>
            <div className={styles.inputBox50}>
              <input type='email' required />
              <span>Email Address</span>
            </div>
            <div className={styles.inputBox50}>
              <input type='text' required />
              <span>Phone #</span>
            </div>
            <div className={styles.inputBox100}>
              <textarea required></textarea>
              <span>Your Message Here...</span>
            </div>
            <div className={styles.btnContainer}>
              <Button text='Submit' color='tertiary' />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
