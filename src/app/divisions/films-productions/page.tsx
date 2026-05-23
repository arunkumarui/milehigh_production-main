import type { Metadata } from "next";
import styles from "./films-productions.module.css";

export const metadata: Metadata = {
  title: "Films Productions",
  description:
    "Mile High Production's film productions division — creating compelling narratives and visually stunning films for global audiences.",
};

export default function FilmsProductionsPage(): React.JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} id="fd-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroVideo}
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-filmmaker-working-on-set-1560671953305?download=1080p"
            type="video/mp4"
          />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>MileHigh Production</h1>
          <p className={styles.heroSubtitle}>
            Crafting Stories for the Big Screen
          </p>
          <div className={styles.heroButtons}>
            <button className={`${styles.btn} ${styles.goldBtn}`} id="fd-explore-btn">
              Explore Projects
            </button>
            <button className={`${styles.btn} ${styles.darkBtn}`} id="fd-showreel-btn">
              Watch Showreel
            </button>
          </div>
        </div>
      </section>

      {/* About Studio */}
      <section className={styles.section} id="fd-about">
        <h2 className={styles.sectionTitle}>About Studio</h2>
        <div className={styles.about}>
          <div className={styles.aboutText}>
            <p>
              MileHigh Production creates cinematic experiences with powerful
              storytelling, modern visuals, and emotionally engaging films. Our
              vision is to bring world-class entertainment to theatres and
              digital platforms.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1974&auto=format&fit=crop"
            alt="MileHigh Production Studio"
            className={styles.aboutImage}
          />
        </div>
      </section>

      {/* Current Productions */}
      <section className={styles.section} id="fd-productions">
        <h2 className={styles.sectionTitle}>Current Productions</h2>
        <div className={styles.movies}>
          <div className={styles.movieCard}>
            <img
              src="https://dummyimage.com/600x900/111111/d4af37&text=Shadow+Hunter"
              alt="Shadow Hunter Movie Poster"
              className={styles.movieCardImage}
            />
            <div className={styles.movieInfo}>
              <h3>Shadow Hunter</h3>
              <p>Action Thriller • 2026</p>
            </div>
          </div>

          <div className={styles.movieCard}>
            <img
              src="https://dummyimage.com/600x900/1a1a1a/d4af37&text=Last+Signal"
              alt="Last Signal Movie Poster"
              className={styles.movieCardImage}
            />
            <div className={styles.movieInfo}>
              <h3>Last Signal</h3>
              <p>Crime Drama • OTT Original</p>
            </div>
          </div>

          <div className={styles.movieCard}>
            <img
              src="https://dummyimage.com/600x900/0b0b0b/d4af37&text=Beyond+Sky"
              alt="Beyond Sky Movie Poster"
              className={styles.movieCardImage}
            />
            <div className={styles.movieInfo}>
              <h3>Beyond Sky</h3>
              <p>Sci-Fi Adventure • Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Services */}
      <section className={styles.section} id="fd-services">
        <h2 className={styles.sectionTitle}>Production Services</h2>
        <div className={styles.services}>
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>🎬</span>
            <h3>Film Production</h3>
            <p>End-to-end movie production solutions.</p>
          </div>

          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>🎭</span>
            <h3>Casting</h3>
            <p>Professional casting and talent management.</p>
          </div>

          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>📷</span>
            <h3>Cinematography</h3>
            <p>Premium cinematic visual storytelling.</p>
          </div>

          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>✨</span>
            <h3>VFX &amp; Editing</h3>
            <p>Modern post-production and visual effects.</p>
          </div>
        </div>
      </section>

      {/* Behind The Scenes */}
      <section className={styles.section} id="fd-bts">
        <h2 className={styles.sectionTitle}>Behind The Scenes</h2>
        <div className={styles.gallery}>
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1974&auto=format&fit=crop"
            alt="Behind the scenes — filming"
            className={styles.galleryImage}
          />
          <img
            src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1974&auto=format&fit=crop"
            alt="Behind the scenes — camera setup"
            className={styles.galleryImage}
          />
          <img
            src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1974&auto=format&fit=crop"
            alt="Behind the scenes — production crew"
            className={styles.galleryImage}
          />
        </div>
      </section>

      {/* Meet The Team */}
      <section className={styles.section} id="fd-team">
        <h2 className={styles.sectionTitle}>Meet The Team</h2>
        <div className={styles.team}>
          <div className={styles.teamCard}>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
              alt="Arjun — Founder & Producer"
              className={styles.teamCardImage}
            />
            <h3>Arjun</h3>
            <p>Founder &amp; Producer</p>
          </div>

          <div className={styles.teamCard}>
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
              alt="Rahul — Director"
              className={styles.teamCardImage}
            />
            <h3>Rahul</h3>
            <p>Director</p>
          </div>

          <div className={styles.teamCard}>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
              alt="Priya — Cinematographer"
              className={styles.teamCardImage}
            />
            <h3>Priya</h3>
            <p>Cinematographer</p>
          </div>
        </div>
      </section>

      {/* Studio Experience */}
      <section className={styles.section} id="fd-studio-experience">
        <h2 className={styles.sectionTitle}>Studio Experience</h2>
        <div className={styles.gallery}>
          <img
            src="https://dummyimage.com/700x500/111111/d4af37&text=Production+Floor"
            alt="Studio — Production Floor"
            className={styles.galleryImage}
          />
          <img
            src="https://dummyimage.com/700x500/1a1a1a/d4af37&text=Cinematic+Lighting"
            alt="Studio — Cinematic Lighting"
            className={styles.galleryImage}
          />
          <img
            src="https://dummyimage.com/700x500/0f0f0f/d4af37&text=Editing+Suite"
            alt="Studio — Editing Suite"
            className={styles.galleryImage}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta} id="fd-cta">
        <h2 className={styles.ctaTitle}>
          Every Great Film Starts With a Vision
        </h2>
        <div className={styles.ctaButton}>
          <button className={`${styles.btn} ${styles.goldBtn}`} id="fd-start-project-btn">
            Start a Project
          </button>
        </div>
      </section>
    </>
  );
}
