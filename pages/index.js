import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <motion.main className={styles.main} initial='hidden' animate='show'>
          <ScrollToTop />
          <Navbar />
          <Hero />
          <Services />
        </motion.main>
      </div>
    </div>
  );
}
