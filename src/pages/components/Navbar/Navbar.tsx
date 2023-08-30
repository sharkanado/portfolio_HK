import React, {useEffect, useRef, useState} from "react";
import styles from "./Navbar.module.scss";
import {nunito} from "@/styles/fonts";

const Navbar = () => {
  const navLinks = [
    {name: "home", link: "/"},
    {name: "gallery", link: "#gallery"},
    {name: "cv", link: "#about"},
    {name: "contact", link: "#contact"},
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      event.target !== buttonRef.current
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDesktop}>
        <nav>
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
      <div className={styles.navbarMobile}>
        <div className="">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            toggle
          </button>
        </div>
        <nav
          ref={menuRef}
          style={{
            height: isMenuOpen ? "10rem" : "0rem",
            marginTop: isMenuOpen ? "3rem" : "0rem",
          }}
        >
          {isMenuOpen &&
            navLinks.map(({name, link}, idx) => (
              <a
                key={idx}
                href={link}
                className={`${styles.navLink} ${nunito.className}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </a>
            ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
