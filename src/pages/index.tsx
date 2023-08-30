import React from "react";
import Head from "next/head";
import {MainWrapper} from "./components";
import styles from "@/styles/Home.module.scss";
import {nunitoBold, ptSans} from "@/styles/fonts";
import Link from "next/link";

const Home = () => {
  return (
    <MainWrapper>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Gallery />
    </MainWrapper>
  );
};

export default Home;

const Hero = () => {
  return (
    <section className={`${styles.hero} ${styles.section}`}>
      <h1 className={`${nunitoBold.className}`}>HUBERT KLIMCZAK</h1>
      <div />
      <p className={`${ptSans.className}`}>
        Jestem grafikiem i ilustratorem z wielką pasją do sztuki i komputerowego
        tworzenia. Stawiam na ciągły rozwój moich umiejętności artystycznych,
        aby wspierać innowacyjność i doskonalić produkty. Lubię eksperymentować
        z nowymi technikami i trendami, co pomaga mi tworzyć unikalne dzieła
        sztuki. Moje prace zawsze dążą do doskonałości, a moja otwarta
        mentalność pozwala mi odkrywać nowe sposoby wyrażania kreatywności.
      </p>
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
