import Image from "next/image";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import styles from "../styles/Photo.module.css";
import b1 from "../public/images/b1.jpg";
import b3 from "../public/images/b3.jpg";
import b4 from "../public/images/b4.jpg";

function Photos() {
  return (
    <section className={styles.photosContainer}>
      <h2 className={styles.heading}>Our Work</h2>
      <div className={styles.boxContainer}>
        <div className={styles.box1}>
          <Image src={b1} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.box2}>
          <Image src={b3} layout='fill' objectFit='cover' />
        </div>
        <div className={styles.box3}>
          <h5>Beards</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur.
          </p>
          <Link href='/'>
            <a>
              <CgArrowLongRight className={styles.icon} />
            </a>
          </Link>
        </div>
        <div className={styles.box4}>
          <h5>Hair Cuts</h5>
          <p>
            Lorem ipsum dolor sit, amet consec.
          </p>
          <Link href='/'>
            <a>
              <CgArrowLongRight className={styles.icon} />
            </a>
          </Link>
        </div>
        <div className={styles.box5}>
          <Image src={b4} layout='fill' objectFit='cover' />
        </div>
      </div>
    </section>
  );
}

export default Photos;
