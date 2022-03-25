import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { GiRazor } from "react-icons/gi";
import Button from "./utils/Button";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const body = document.querySelector("body");
    if (window.innerWidth <= 953 && isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <motion.header
      animate={{ opacity: 1, transition: { duration: 1 } }}
      initial={{ opacity: 0 }}
      className={styles.header}
    >
      <nav className={styles.navbar}>
        <Link href='/' passHref>
          <span className={styles.navbarLogo}>
            <GiRazor className={styles.navbarIcon} />
            <a>RAZOR EDGE</a>
          </span>
        </Link>
        <ul
          onClick={openMenu}
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <Link href='/' passHref>
            <li className={styles.navItem}>
              <a onClick={openMenu}>Home</a>
            </li>
          </Link>
          <Link href='/services' passHref>
            <li className={styles.navItem}>
              <a onClick={openMenu}>Services</a>
            </li>
          </Link>
          <Link href='/about' passHref>
            <li className={styles.navItem}>
              <a onClick={openMenu}>About</a>
            </li>
          </Link>
          <Link href='/gallery' passHref>
            <li className={styles.navItem}>
              <a onClick={openMenu}>Gallery</a>
            </li>
          </Link>
          <Link href='/#contact' passHref>
            <li className={styles.navItem}>
              <a onClick={openMenu}>Contact</a>
            </li>
          </Link>
          <div className={styles.btnContainerMobile}>
            <Button
              href='tel:602-473-0386'
              text='602-473-0386'
              color='primaryOutline2'
              btnSz='large2'
            />
          </div>
        </ul>
        <div className={styles.btnContainerDesktop}>
          <Button
            href='tel:602-473-0386'
            text='602-473-0386'
            color='primaryOutline2'
            btnSz='small'
          />
        </div>
        <span
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </span>
      </nav>
    </motion.header>
  );
}

export default Navbar;
