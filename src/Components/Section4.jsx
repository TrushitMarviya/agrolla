"use client" ;

import "@/CSS/Section4.css";
import $ from "jquery"; // Import jQuery
import { useEffect } from "react";

export default function Section4() {
  useEffect(() => {
    // jQuery counter logic
    $(".counter-number").each(function () {
      const $this = $(this);
      const countTo = $this.text().replace("+", ""); // Remove "+" for counting
      $this.text("0"); // Initialize with 0

      $({ countNum: $this.text() }).animate(
        { countNum: countTo },
        {
          duration: 2000, // Animation duration in milliseconds
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum) + "+");
          },
          complete: function () {
            $this.text(this.countNum + "+"); // Add "+" back after animation
          },
        }
      );
    });
  }, []); // Run once when the component mounts

  return (
    <div className="main-contain">
      <div className="sec1">
        <img src="/about-agrolla.png" alt="" className="image" />
        <div className="txt">
          <h1 style={{ color: "#111827" }}>
            About <span style={{ color: "#2E7D32" }}>Agrolla</span>
          </h1>
          <h5>
            Founded in 2010, Agrolla has been at the forefront of agricultural
            innovation, helping farmers across India embrace modern farming
            techniques and technologies.
          </h5>
          <h5>
            Our mission is to transform traditional farming practices through
            sustainable solutions that increase productivity, reduce
            environmental impact, and improve farmers' livelihoods.
          </h5>
          <h5>
            With a team of agricultural experts, engineers, and technology
            specialists, we provide comprehensive solutions tailored to the
            unique needs of each farming operation.
          </h5>
          <div className="counter">
            <div className="counter-item">
              <div className="counter-number">10+</div>
              <div className="counter-title">Years Experience</div>
            </div>
            <div className="counter-item">
              <div className="counter-number">1000+</div>
              <div className="counter-title">Happy Farmers</div>
            </div>
            <div className="counter-item">
              <div className="counter-number">10+</div>
              <div className="counter-title">Team Members</div>
            </div>
            <div className="counter-item">
              <div className="counter-number">10+</div>
              <div className="counter-title">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}