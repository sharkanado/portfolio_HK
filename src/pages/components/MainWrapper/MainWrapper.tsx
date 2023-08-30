import React from "react";
import {Footer, Navbar} from "..";
import styles from "./MainWrapper.module.scss";

const MainWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      {children}
      <div className={styles.filler}></div>
      <Footer />
    </div>
  );
};
export default MainWrapper;
