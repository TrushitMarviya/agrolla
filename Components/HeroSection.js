"use client"; // Ensure this is at the top for client-side rendering in Next.js App Router

import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../CSS/HeroSection.module.css"; // Import as a CSS module

export default function Home() {
  const [showFarmer, setShowFarmer] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFarmer(true);
    }, 1900);

    return () => clearTimeout(timeout);
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
        </div>

        {showFarmer && (
          <img src="/farmer.png" alt="Farmer" className={styles.farmer} />
        )}

        <img src="/tractor.svg" alt="Tractor" className={styles.tractor} />
        <img src="/land.png" alt="Land" className={styles.land} />
        
      </div>
    </>
  );
}