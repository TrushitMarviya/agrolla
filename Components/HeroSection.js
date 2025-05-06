"use client"; // Ensure this is at the top for client-side rendering in Next.js App Router

import Head from "next/head";
import { useState, useEffect } from "react"; // Import useState and useEffect
import styles from "../CSS/HeroSection.module.css"; // Import as a CSS module

export default function Home() {
  const [showWheatStalks, setShowWheatStalks] = useState(false); // State to control wheat stalk visibility

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWheatStalks(true); // Show wheat stalks after a delay
    }, 2000); // Delay in milliseconds (3 seconds)

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  return (
    <>
      <Head>
        <title>Animated Hero</title>
      </Head>
      <div className={styles.hero}>
        <img src="/cloud.png" alt="Cloud" className={styles.cloud} />
        <img src="/birds.svg" alt="Birds" className={styles.birds} />
        <img src="/cloud.png" alt="Cloud" className={styles.cloud} />
        <img src="/birds.svg" alt="Birds" className={styles.birds} />

        <div className={styles.windmill}>
          <img src="/wings.svg" alt="Wings" className={styles.wings} />
          <img src="/windmillstand.svg" alt="WindMillStand" className={styles.wingstand} />
          <img src="/side-wing.svg" alt="Side Wing" className={styles.sideWing} />
          <img src="/farmer.svg" alt="Farmer" className={styles.farmer} />
        </div>

        <div className={styles.tractorContainer}>
          <img src="/tractor.svg" alt="Tractor" className={styles.tractor} />
          <div className={styles.tractorWheel}></div>
          <div className={styles.tractorWheel}></div>
        </div>

        {showWheatStalks && ( // Conditionally render wheat stalks
          <div className={styles.wheatStalk}>
            <img src="/wheat-stalk.svg" alt="Wheat-Stalk" />
            <img src="/wheat-stalk.svg" alt="Wheat-Stalk" />
            <img src="/wheat-stalk.svg" alt="Wheat-Stalk" />
            <img src="/wheat-stalk.svg" alt="Wheat-Stalk" />
            <img src="/wheat-stalk.svg" alt="Wheat-Stalk" />
            <img src="/wheat-stalk.svg" alt="Wheat-Stalk" />
            <img src="/wheat-stalk.svg" alt="Wheat-Stalk" />
            <img src="/wheat-stalk.svg" alt="Wheat-Stalk" />
          </div>
        )}

        <img src="/land.png" alt="Land" className={styles.land} />
      </div>
    </>
  );
}