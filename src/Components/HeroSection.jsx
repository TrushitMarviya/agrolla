"use client";
import { useState, useEffect } from "react";
import '@/CSS/HeroSection-module.css'

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
      {/* Navbar */}
      <div className="navbar">
        <div className="navsection">
          <img src="/logo.png" alt="Agrolla" className="logo" />
          <div className="navlinks">
            <a href="/" style={{ color: "#2E7D32" }}>Home</a>
            <a href="/products">Products</a>
            <a href="/about">About us</a>
            <a href="/contact">Contact</a>
          </div>
          <button className="bt1">Get Quote</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <img src="/cloud.png" alt="Cloud" className="cloud" />
        <img src="/cloud.png" alt="Cloud" className="cloud2" />
        <img src="/cloud.png" alt="Cloud" className="cloud3" />
        <img src="/birds.svg" alt="Birds" className="birds" />
        <img src="/birds.svg" alt="Birds" className="birds2" />

        {/* Windmill */}
        <div className="windmill">
          <img src="/wings.svg" alt="Wings" className="wings" />
          <img src="/windmillstand.svg" alt="WindMillStand" className="wingstand" />
          <img src="/side-wing.svg" alt="Side Wing" className="sideWing" />
          <img src="/farmer.svg" alt="Farmer" className="farmer" />
        </div>

        {/* Tractor */}
        <div className="tractorContainer">
          <img src="/tractor.svg" alt="Tractor" className="tractor" />
          <div className="tractorWheel"></div>
          <div className="tractorWheel"></div>
        </div>

        {/* Wheat Animation */}
        {showWheatStalks && (
          <div className="wheatStalk">
            {[...Array(8)].map((_, i, arr) => (
              <img
                key={i}
                src="/wheat-stalk.svg"
                alt="Wheat-Stalk"
                className={`wheatStalkImg grow`}
                style={{ animationDelay: `${(arr.length - 1 - i) * 0.5}s` }}
              />
            ))}
          </div>
        )}

        {/* Land */}
        <img src="/land.png" alt="Land" className="land" />
      </div>

      {/* Hero Text */}
      <div className="heroText">
        <p className="heroName">
          Revolutionizing <span style={{ color: "#2E7D32" }}>Agriculture</span>
        </p>
        <p className="hero2">
          Agrolla delivers cutting-edge agricultural solutions that maximize
          yield, minimize environmental impact, and transform farming practices
          for a sustainable future.
        </p>
        <div className="btn">
          <button className="btt1">Explore Services</button>
          <button className="bt2">Contact Us</button>
        </div>
      </div>
    </>
  );
}
