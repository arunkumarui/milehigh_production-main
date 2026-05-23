"use client";

import Image from "next/image";
import "@/app/css/home/About.css";

export default function AboutStudio() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12">

            <p className="about-subtitle">
              ABOUT THE STUDIO
            </p>

            <h2 className="about-title">
              Crafting Stories That Move The World
            </h2>

            <p className="about-text">
              We are a passionate film production studio focused on creating
              powerful visual stories through cinema, creativity, and emotion.
              From concept development to final production, we bring ideas to
              life with cinematic excellence.
            </p>

            <p className="about-text">
              Every frame we create is designed to inspire, engage, and leave
              a lasting impact on the audience.
            </p>

            {/* STATS */}
            <div className="about-stats">
              <div>
                <h3>10+</h3>
                <p>Projects</p>
              </div>

              <div>
                <h3>5+</h3>
                <p>Clients</p>
              </div>

              <div>
                <h3>100%</h3>
                <p>Passion</p>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12">

            <div className="about-image">

              <Image
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1920&auto=format&fit=crop"
                alt="film studio"
                fill
                className="about-img"
              />

              <div className="image-overlay"></div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}