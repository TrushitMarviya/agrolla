"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../CSS/HeroSection.module.css";

export default function Home() {
  const [showWheatStalks, setShowWheatStalks] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWheatStalks(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navsection}>
          <img src="/logo.png" alt="Agrolla" className={styles.logo} />
          <div className={styles.navlinks}>
            <a href="" style={{ color: "#2E7D32" }}>
              Home
            </a>
            <a href="">Products</a>
            <a href="">About us</a>
            <a href="">Contact</a>
          </div>
          <button className={styles.bt1}>Get Quote</button>
        </div>
      </div>
      <div className={styles.hero}>
        <img src="/cloud.png" alt="Cloud" className={styles.cloud} />
        <img src="/cloud.png" alt="Cloud" className={styles.cloud2} />
        <img src="/cloud.png" alt="Cloud" className={styles.cloud3} />
        <img src="/birds.svg" alt="Birds" className={styles.birds} />
        <img src="/birds.svg" alt="Birds" className={styles.birds2} />

        <div className={styles.windmill}>
          <img src="/wings.svg" alt="Wings" className={styles.wings} />
          <img
            src="/windmillstand.svg"
            alt="WindMillStand"
            className={styles.wingstand}
          />
          <img
            src="/side-wing.svg"
            alt="Side Wing"
            className={styles.sideWing}
          />
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
      <div className={styles.heroText}>
        <p className={styles.heroName}>
          Revolutionizing <span style={{ color: "#2E7D32" }}>Agriculture</span>
        </p>
        <p className={styles.hero2}>
          Agrolla delivers cutting-edge agricultural solutions that maximize
          yield, minimize environmental impact, and transform farming practices
          for a sustainable future.
        </p>
        <div className={styles.btns}>
        <button className={styles.btn1}>Explore Services</button>
        <button className={styles.btn2}>Contact Us</button>
        </div>
      </div>
    </>
  );
}
