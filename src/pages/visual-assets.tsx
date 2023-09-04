import React from "react";
import {Gallery, MainWrapper} from "./components";
import styles from "../styles/Home.module.scss";

const VisualId = () => {
  const images = require.context("../../public/assets", true);
  const imageList = images.keys().map((image) => images(image));
  const photos = imageList.map((obj: any) => ({
    src: obj.default.src,
    width: obj.default.width,
    height: obj.default.height,
  }));
  return (
    <MainWrapper>
      <div className="galleryContainer">
        <div className={styles.section}>
          <Gallery photos={photos} />
        </div>
      </div>
    </MainWrapper>
  );
};
export default VisualId;
