import React from "react";
import {Gallery, MainWrapper} from "./components";
import styles from "../styles/Home.module.scss";

const TraditionalArt = () => {
  return (
    <MainWrapper>
      <div style={{margin: "5rem 0"}}>
        <div className={styles.section}>
          <Gallery photos={photos} />
        </div>
      </div>
    </MainWrapper>
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
