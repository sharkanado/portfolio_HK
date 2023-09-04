import React from "react";
import styles from "./Footer.module.scss";
import {ptSans} from "@/styles/fonts";

const Footer = () => {
  return (
    <footer id="contact" className={`${styles.footer} ${ptSans.className}`}>
      <p>Hubert Klimczak</p>
      <p>537 773 193</p>
      <p>huberttomaszk@gmail.com</p>
    </footer>
  );
};

export default Footer;
