import React from "react";
import {Gallery, MainWrapper} from "./components";
import styles from "../styles/Home.module.scss";
import {GetStaticProps} from "next";
import axios from "@/lib/axios";
import {Photo} from "@/lib/types";

export const getStaticProps: GetStaticProps = async () => {
  const result = await axios.get("/traditional-art?populate=*");

  const photosStrapi = result.data.data.attributes.images.data;
  console.log(photosStrapi);
  const photos = photosStrapi.map((obj: any) => ({
    src: `http://127.0.0.1:1337${obj.attributes.url}`,
    width: obj.attributes.width,
    height: obj.attributes.height,
  }));

  return {
    props: {
      pageContent: photos,
    },
  };
};

const TraditionalArt = ({pageContent}: {pageContent: Photo[]}) => {
  const photos = pageContent;
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
