import Link from "next/link";
import Image from "next/image";
import styles from "../styles/TestimonialSection.module.css";
import { CgArrowLongRight } from "react-icons/cg";
import b12 from "../public/images/b12.jpg";
import b13 from "../public/images/b13.jpg";
import b14 from "../public/images/b14.jpg";

function TestimonialSection() {
  return (
    <section className={styles.testContainer} id='testimonials'>
      <div className={styles.topContent}>
        <h2 lang='en'>Testimonials</h2>
        <span className={styles.link}>
          <a>What People Say About Us</a>
        </span>
      </div>
      <div className={styles.bottomContent}>
        <article className={`${styles.card} ${styles.card1}`}>
          <div className={styles.cardHead1}>
            <picture className={styles.imgContainer}>
              <Image
                src={b12}
                alt='person1'
                width={32}
                height={32}
                objectFit='cover'
                className={styles.img}
              />
            </picture>
            <div className={styles.cardUser}>
              <div className={styles.name}>Danny Willimas</div>
              <p className={styles.title}>Verified Client</p>
            </div>
          </div>
          <p className={styles.cardDetail1}>
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. ”
          </p>
        </article>
        <article className={`${styles.card} ${styles.card2}`}>
          <div className={styles.cardHead}>
            <picture className={styles.imgContainer}>
              <Image
                src={b12}
                alt='person1'
                width={32}
                height={32}
                objectFit='cover'
                className={styles.img}
              />
            </picture>
            <div className={styles.cardUser}>
              <div className={styles.name}>Danny Willimas</div>
              <p className={styles.title}>Verified Client</p>
            </div>
          </div>
          <p className={styles.cardDetail}>
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </article>
        <article className={`${styles.card} ${styles.card3}`}>
          <div className={styles.cardHead}>
            <picture className={styles.imgContainer}>
              <Image
                src={b12}
                alt='person1'
                width={32}
                height={32}
                objectFit='cover'
                className={styles.img}
              />
            </picture>
            <div className={styles.cardUser}>
              <div className={styles.name}>Danny Willimas</div>
              <p className={styles.title}>Verified Client</p>
            </div>
          </div>
          <p className={styles.cardDetail}>
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. Before
            joining the bootcamp, I’ve never written a line of code. I needed
            some structure from professionals who can help me learn programming
            step by step. The agile team project, in particular, was
            outstanding.”
          </p>
        </article>
        <article className={`${styles.card} ${styles.card4}`}>
          <div className={styles.cardHead}>
            <picture className={styles.imgContainer}>
              <Image
                src={b12}
                alt='person1'
                width={32}
                height={32}
                objectFit='cover'
                className={styles.img}
              />
            </picture>
            <div className={styles.cardUser}>
              <div className={styles.name}>Danny Willimas</div>
              <p className={styles.title}>Verified Client</p>
            </div>
          </div>
          <p className={styles.cardDetail}>
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. ”
          </p>
        </article>
        <article className={`${styles.card} ${styles.card5}`}>
          <div className={styles.cardHead}>
            <picture className={styles.imgContainer}>
              <Image
                src={b12}
                alt='person1'
                width={32}
                height={32}
                objectFit='cover'
                className={styles.img}
              />
            </picture>
            <div className={styles.cardUser}>
              <div className={styles.name}>Danny Willimas</div>
              <p className={styles.title}>Verified Client</p>
            </div>
          </div>
          <p className={styles.cardDetail}>
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding.”
          </p>
        </article>
      </div>
    </section>
  );
}

export default TestimonialSection;
