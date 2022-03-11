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
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
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
            <Link href='/'>
              <li className={styles.navItem}>
                <a onClick={openMenu}>Home</a>
              </li>
            </Link>
            <Link href='/services'>
              <li className={styles.navItem}>
                <a onClick={openMenu}>Services</a>
              </li>
            </Link>
            <Link href='/about'>
              <li className={styles.navItem}>
                <a onClick={openMenu}>About</a>
              </li>
            </Link>
            <Link href='/#photos'>
              <li className={styles.navItem}>
                <a onClick={openMenu}>Photos</a>
              </li>
            </Link>
              <Link href='/#contact'>
            <li className={styles.navItem}>
                <a onClick={openMenu}>Contact</a>
            </li>
              </Link>
            <div className={styles.btnContainerMobile}>
              <Button
                href='/'
                text='602-775-8941'
                color='primaryOutline2'
                btnSz='large'
              />
            </div>
          </ul>
          <div className={styles.btnContainerDesktop}>
            <Button
              href='tel:602-775-8941'
              text='602-775-8941'
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
      </header>
    </>
  );
}

export default Navbar;
