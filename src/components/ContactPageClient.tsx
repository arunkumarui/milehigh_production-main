"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaShieldAlt,
  FaBolt,
  FaGlobe,
} from "react-icons/fa";

export default function ContactPageClient(): React.JSX.Element {
  // Smooth scroll handler to target sections
  const handleScrollToForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToWork = () => {
    const element = document.getElementById("contact-info");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ backgroundColor: "#050816", color: "#ffffff", overflow: "hidden" }}>
      {/* ================= HERO SECTION ================= */}
      <section
        className="position-relative d-flex align-items-center py-5 py-md-0"
        style={{ minHeight: "calc(100vh - var(--header-height))" }}
      >
        {/* Background Image */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
        />

        {/* Gradient */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "linear-gradient(to right, #000000 0%, rgba(0, 0, 0, 0.7) 70%, transparent 100%)",
          }}
        />

        <div className="container px-4 px-md-5 position-relative" style={{ zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: "768px" }}
          >
            <span
              className="contact-subtitle" >
              Get In Touch
            </span>

            <h1 className="display-4 display-md-2 fw-bold lh-tight mb-4" style={{ letterSpacing: "-1px" }}>
              Let’s Create
              <br />
              <span className="fst-italic" style={{ color: "#D4A64A" }}>
                Something Extraordinary
              </span>
            </h1>

            <p className="lead text-light mb-4" style={{ opacity: 0.85, lineHeight: "2rem", maxWidth: "42rem" }}>
              Have a project in mind? We’d love to hear about it. Fill out the form below or drop us a line to start the
              conversation.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3">
              <button
                onClick={handleScrollToForm}
                className=" btn primary"
              >
                Start a Project
                <FaArrowRight />
              </button>

              <button
                onClick={handleScrollToWork}
                className="btn btn-outline-custom px-4 py-3 d-inline-flex align-items-center justify-content-center"
              >
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MAP + CONTACT SECTION ================= */}
      <section
        id="contact-info"
        className="contact-section py-5 py-lg-6"
        style={{ backgroundColor: "#070B1A", padding: "6rem 0" }}
      >
        <div className="container px-4 px-md-5">
          <div className="row g-5 align-items-center">
            {/* MAP */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="overflow-hidden shadow-lg"
                style={{ borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.1)" }}
              >

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24623.031308857026!2d80.18136235863739!3d13.053840097382118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266dde971e491%3A0x312fbf9a478db339!2sMonticello%20Apartment!5e0!3m2!1sen!2sin!4v1779389114633!5m2!1sen!2sin"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="w-100 contact-map-iframe"
                />
              </motion.div>
            </div>

            {/* CONTACT INFO */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <span
                  className="contact-subtitle"
                >
                  Visit Our Studio
                </span>

                <h2 className="contact-title">
                  We’d Love

                  to Meet You
                </h2>

                <div className="d-flex flex-column gap-3">
                  {/* Address */}
                  <div className="d-flex gap-4 p-4 contact-card">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(212, 166, 74, 0.2)",
                      }}
                    >
                      <FaMapMarkerAlt className="fs-4" style={{ color: "#D4A64A" }} />
                    </div>

                    <div>
                      <h4 className="h5 fw-semibold mb-1">Our Studio</h4>
                      <p className="text-secondary mb-0" style={{ lineHeight: "1.6" }}>
                        Flat 1B, Monticello Apartments, 20-B2-3, Kamarajar Salai, K.K. Nagar, Chennai 600078
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="d-flex gap-4 p-4 contact-card">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(212, 166, 74, 0.2)",
                      }}
                    >
                      <FaPhoneAlt className="fs-4" style={{ color: "#D4A64A" }} />
                    </div>

                    <div>
                      <h4 className="h5 fw-semibold mb-1">Call Us</h4>
                      <p className="text-secondary mb-0">+1 (303) 555-0147</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="d-flex gap-4 p-4 contact-card">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(212, 166, 74, 0.2)",
                      }}
                    >
                      <FaEnvelope className="fs-4" style={{ color: "#D4A64A" }} />
                    </div>

                    <div>
                      <h4 className="h5 fw-semibold mb-1">Email Us</h4>
                      <p className="text-secondary mb-0">hello@milehighproductions.com</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="d-flex gap-4 p-4 contact-card">
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(212, 166, 74, 0.2)",
                      }}
                    >
                      <FaClock className="fs-4" style={{ color: "#D4A64A" }} />
                    </div>

                    <div>
                      <h4 className="h5 fw-semibold mb-1">Studio Hours</h4>
                      <p className="text-secondary mb-0" style={{ lineHeight: "1.6" }}>
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: By Appointment
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section
        id="contact-form"
        className="contact-section bg-white text-dark py-5 py-lg-6"
        style={{ padding: "6rem 0" }}
      >
        <div className="container px-4 px-md-5">
          <div className="row g-5 align-items-center">
            {/* FORM */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="contact-subtitle">
                  Send Us A Message
                </span>

                <h2 className="contact-title">
                  Tell Us About
                  <br />
                  Your

                  Project

                </h2>

                <form className="row g-3">
                  <div className="col-md-6">
                    <input type="text" placeholder="Full Name" className="form-control contact-input w-100" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" placeholder="Email Address" className="form-control contact-input w-100" />
                  </div>

                  <div className="col-md-6">
                    <input type="text" placeholder="Phone Number" className="form-control contact-input w-100" />
                  </div>
                  <div className="col-md-6">
                    <select className="form-select contact-input w-100" defaultValue="Select Service">
                      <option disabled>Select Service</option>
                      <option>films productions</option>
                      <option>films distribution</option>

                    </select>
                  </div>

                  <div className="col-12">
                    <textarea
                      rows={6}
                      placeholder="Project Details"
                      className="form-control contact-input w-100"
                      style={{ resize: "none" }}
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn primary">
                      Send Message  <FaPaperPlane />
                     
                    </button>
                  </div>

                </form>
              </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="overflow-hidden shadow-lg border"
                style={{
                  backgroundColor: "#050816",
                  borderRadius: "40px",
                  borderColor: "rgba(255, 255, 255, 0.05)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop"
                  alt="camera"
                  className="w-100 object-fit-cover"
                  style={{ height: "350px" }}
                />



              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
