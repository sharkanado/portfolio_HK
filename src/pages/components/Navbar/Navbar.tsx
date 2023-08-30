import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import {nunito} from "@/styles/fonts";

const Navbar = () => {
  const navLinks = [
    {name: "home", link: "/"},
    {name: "gallery", link: "/#gallery"},
    {name: "cv", link: "/#about"},
    {name: "contact", link: "/#contact"},
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Image src="/logo.png" alt="logo" style={{objectFit: "contain"}} fill />
      </div>
      <nav className={styles.nav}>
        {navLinks.map(({name, link}, idx) => (
          <a
            key={idx}
            href={link}
            className={`${styles.navLink} ${nunito.className}`}
          >
            {name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
