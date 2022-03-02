import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { RiVipCrownFill } from "react-icons/ri";

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <span className={styles.navbarLogo}>
              <RiVipCrownFill />
          </span>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
