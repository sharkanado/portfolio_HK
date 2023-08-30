import React from "react";
import {Footer, Gallery, Navbar} from "./components";
import styles from "../styles/Home.module.scss";

const TraditionalArt = () => {
  return (
    <div>
      <Navbar />
      <div style={{margin: "5rem 0"}}>
        <div className={styles.section}>
          <Gallery photos={photos} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default TraditionalArt;

const photos = [
  {
    src: "https://images.pexels.com/photos/18128251/pexels-photo-18128251/free-photo-of-light-sea-dawn-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.pexels.com/photos/6753871/pexels-photo-6753871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    width: 1600,
    height: 900,
  },
];
