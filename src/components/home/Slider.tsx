"use client";

import "@/app/css/home/Slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    title: "Stories Beyond Imagination",
    subtitle: "Award Winning Film Production",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1920&auto=format&fit=crop",
  },

  {
    title: "Cinematic Excellence",
    subtitle: "Visual Storytelling Redefined",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1920&auto=format&fit=crop",
  },

  {
    title: "Create. Inspire. Impact.",
    subtitle: "Next Generation Film Studio",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1920&auto=format&fit=crop",
  },
];

export default function CinematicSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      speed={2000}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="heroSwiper"
      style={{ height: "100%" }} 
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero-slide d-flex align-items-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay */}
            <div className="overlay"></div>

            {/* Content */}
            <div className="container position-relative z-2">
              <div className="row">
                <div className="col-lg-7 text-white">
                  <p className="hero-subtitle">
                    {slide.subtitle}
                  </p>

                  <h1 className="hero-title">
                    {slide.title}
                  </h1>

                  <button className="btn btn-outline-light hero-btn">
                    Explore Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}