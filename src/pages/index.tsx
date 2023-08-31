import React from "react";
import Head from "next/head";
import {MainWrapper} from "./components";
import styles from "@/styles/Home.module.scss";
import {nunitoBold, ptSans} from "@/styles/fonts";
import Link from "next/link";
import axios from "@/lib/axios";
import {GetStaticProps, InferGetStaticPropsType} from "next";

export const getStaticProps: GetStaticProps = async () => {
  const result = await axios.get("/about");

  return {
    props: {
      pageContent: result.data,
    },
  };
};

const Home = ({
  pageContent,
}: {
  pageContent: InferGetStaticPropsType<typeof getStaticProps>;
}) => {
  console.log(pageContent.data.attributes.about);
  return (
    <MainWrapper>
      <Head>
        <title>Portfolio - Hubert Klimczak</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero about={pageContent.data.attributes.about} />
      <Gallery />
    </MainWrapper>
  );
};

export default Home;

const Hero = ({about}: {about: string}) => {
  return (
    <section className={`${styles.hero} ${styles.section}`}>
      <h1 className={`${nunitoBold.className}`}>Hubert Klimczak</h1>
      <div />
      <p className={`${ptSans.className}`}>{about}</p>
    </section>
  );
};

const Gallery = () => {
  const routes = [
    {name: "Visual Assets", route: "/visual-assets"},
    {name: "Traditional Art", route: "/traditional-art"},
    {name: "Digital Art", route: "/digital-art"},
  ];
  return (
    <section id="gallery" className={`${styles.gallery} ${styles.section}`}>
      <h2 className={`${nunitoBold.className}`}>GALLERY</h2>

      <div className={styles.galleryLinksWrapper}>
        {routes.map(({name, route}, idx) => (
          <Link className={styles.galleryLink} key={idx} href={route}>
            {name}
          </Link>
        ))}
      </div>
    </section>
  );
};
