import Image from "next/image";
import styles from "../styles/TestimonialSection.module.css";
import b12 from "../public/images/b12.jpg";


function TestimonialSection() {

  return (
    <section className={styles.testContainer} id='testimonials'>
      <div
        className={styles.topContent}
      >
        <h2 className={styles.heading} lang='en'>Reviews</h2>
        <span className={styles.link}>
          <a>What People Say About Us</a>
        </span>
      </div>
      <div
        className={styles.bottomContent}
      >
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
            “ All the barbers have good customer service, they will even give
            you their personal phone numbers so you can schedule an appointment.
            All barbers our great, but I do recommend the first chair when you
            enter. Shop is always clean and provides good entertainment for all
            ages. They also provide a restroom and snack/or drinks for a small
            fee. This Barbershop is where to go! ”
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
            “ This is a first class barbershop and the barbers who work there
            are consumate professionals. Not only do you get a great haircut,
            you get greeted with a big smile and welcome from the barbers. The
            establishment is clean and comfortable to sit in. They have several
            big screen TVs to watch while you wait. My barber is Mr. T. Smack .
            He is accomadting in making appointments and is always on time.
            Great service and great barbers!! ”
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
            “ Smack has been cutting my hair almost ten years now. This
            barbershop is a great place to get a quality haircut. The barbers
            are knowledgeable and skilled professionals. The prices are more
            than fair for the quality they provide and the atmosphere is exactly
            that of a real barbershop. Great music, tv, or sports are on for
            your entertainment during the cut. Personally, I enjoy conversation
            with my barber. It&apos;s a great place to decompress and have
            yourself manicured by the best. Appreciate all the barbers in this
            shop, stand up people. ”
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
            “ Cool little spot with some GREAT barbers. I&apos;ve been gettin
            cut by one of the guys for years now. I highly recommend them. They
            used to be appointment only but recently I noticed a sign out front
            welcoming walk ins. Just be aware you may not get in immediately. ”
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
            “ All the barbers are professional and attentive to their clients
            needs. I have seen them cut men, women and children&apos;s hair. The
            shop has everything you could want (e.g. good conversations, laughs,
            television&apos;s, music and cleanliness). Stop by and give them a
            visit. You won&apos;t be disappointed.Troy is an awesome barber! He
            is reliable, professional, and skillful at cutting hair. He has
            managed my son&apos;s hair for about 3 years now. The shop is clean
            and conventionally located for us too. ”
          </p>
        </article>
      </div>
    </section>
  );
}

export default TestimonialSection;
