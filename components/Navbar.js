import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { RiVipCrownFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Button from "./utils/Button";

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
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <span className={styles.navbarLogo}>
            <RiVipCrownFill className={styles.navbarIcon} />
            <a>Company Name</a>
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
          <li className={styles.navItem}>
            <Link href='/'>
              <a onClick={openMenu}>Item 1</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/'>
              <a onClick={openMenu}>Item 2</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/'>
              <a onClick={openMenu}>Item 3</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/'>
              <a onClick={openMenu}>Item 4</a>
            </Link>
          </li>
          <div className={styles.btnContainerMobile}>
            <Button
              href='/'
              text='Mobile'
              color='primaryOutline2'
              btnSz='large'
            />
          </div>
        </ul>
        <div className={styles.btnContainerDesktop}>
          <Button
            href='/'
            text='Desktop'
            color='primaryOutline'
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
    </header>
  );
}

export default Navbar;
