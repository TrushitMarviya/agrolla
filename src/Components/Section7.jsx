"use client";
import "@/CSS/Section7.css";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Section7() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperRef.current;

    if (!swiperEl) return;

    const handleMouseEnter = () => {
      swiperEl.swiper.autoplay.stop();
    };
    const handleMouseLeave = () => {
      swiperEl.swiper.autoplay.start();
    };

    swiperEl.addEventListener("mouseenter", handleMouseEnter);
    swiperEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      swiperEl.removeEventListener("mouseenter", handleMouseEnter);
      swiperEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="section7">
      <h1>
        What Our <span style={{ color: "#2E7D32" }}>Clients</span> Say
      </h1>
      <h5>
        Hear from farmers who have transformed their agricultural practices with{" "}
        <br />
        our solutions.
      </h5>
      <div className="slider">
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={false}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="stars">
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
            </div>
            <p className="exp">
              "Implementing Agrolla's precision farming solutions has increased
              my crop yield by 40% while reducing water usage by 30%. Their team
              provided exceptional support throughout the entire process."
            </p>
            <div className="userinfo">
              <img src="/farmer1.jpg" alt="" />
              <div className="part2">
                <p className="name">Rajesh Kumar</p>
                <p className="passion">Rice Farmer, Gujarat</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="stars">
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
            </div>
            <p className="exp">
              "The smart irrigation system from Agrolla has revolutionized our
              water management. We've seen significant improvements in crop
              quality and substantial water savings. Highly recommended!"
            </p>
            <div className="userinfo">
              <img src="/farmer2.jpg" alt="" />
              <div className="part2">
                <p className="name">Sunita Sharma</p>
                <p className="passion">Vegetable Grower, Maharashtra</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="stars">
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
            </div>
            <p className="exp">
              "Switching to Agrolla's organic farming solutions has been a
              game-changer for our farm. We've reduced chemical inputs while
              maintaining high yields, and our products now command premium
              prices in the market."
            </p>
            <div className="userinfo">
              <img src="/farmer3.jpg" alt="" />
              <div className="part2">
                <p className="name">Vikram Singh</p>
                <p className="passion">Organic Farmer, Punjab</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="stars">
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
            </div>
            <p className="exp">
              "Implementing Agrolla's precision farming solutions has increased
              my crop yield by 40% while reducing water usage by 30%. Their team
              provided exceptional support throughout the entire process."
            </p>
            <div className="userinfo">
              <img src="/farmer1.jpg" alt="" />
              <div className="part2">
                <p className="name">Rajesh Kumar</p>
                <p className="passion">Rice Farmer, Gujarat</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="stars">
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
            </div>
            <p className="exp">
              "The smart irrigation system from Agrolla has revolutionized our
              water management. We've seen significant improvements in crop
              quality and substantial water savings. Highly recommended!"
            </p>
            <div className="userinfo">
              <img src="/farmer2.jpg" alt="" />
              <div className="part2">
                <p className="name">Sunita Sharma</p>
                <p className="passion">Vegetable Grower, Maharashtra</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="stars">
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
              <img src="/star.svg" alt="" />
            </div>
            <p className="exp">
              "Switching to Agrolla's organic farming solutions has been a
              game-changer for our farm. We've reduced chemical inputs while
              maintaining high yields, and our products now command premium
              prices in the market."
            </p>
            <div className="userinfo">
              <img src="/farmer3.jpg" alt="" />
              <div className="part2">
                <p className="name">Vikram Singh</p>
                <p className="passion">Organic Farmer, Punjab</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
