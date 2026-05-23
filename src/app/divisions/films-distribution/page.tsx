import type { Metadata } from "next";
import styles from "./films-distribution.module.css";

export const metadata: Metadata = {
  title: "Films Distribution",
  description:
    "MileHigh Production's global film distribution division — bringing powerful stories to screens worldwide through theatres, OTT platforms, and international markets.",
};

export default function FilmsDistributionPage(): React.JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} id="dist-hero">
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
          <h1 className={styles.heroTitle}>
            Global Film <span className={styles.heroHighlight}>Distribution</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Bringing Powerful Stories To Screens Worldwide
          </p>
          <div className={styles.heroButtons}>
            <button className={`${styles.btn} ${styles.goldBtn}`} id="dist-explore-btn">
              Explore Releases
            </button>
            <button className={`${styles.btn} ${styles.darkBtn}`} id="dist-partner-btn">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Distribution Stats */}
      <section className={styles.section} id="dist-stats">
        <h2 className={styles.sectionTitle}>Distribution Stats</h2>
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Screens Worldwide</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>20+</span>
            <span className={styles.statLabel}>Countries</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statLabel}>OTT Partners</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>100M+</span>
            <span className={styles.statLabel}>Audience Reach</span>
          </div>
        </div>
      </section>

      {/* About Distribution */}
      <section className={styles.section} id="dist-about">
        <h2 className={styles.sectionTitle}>Worldwide Distribution</h2>
        <div className={styles.about}>
          <div className={styles.aboutText}>
            <p>
              MileHigh Production distributes films across theatres,
              OTT platforms, satellite channels, and international markets
              with a modern cinematic release strategy. Our network spans
              across continents, ensuring your stories reach audiences everywhere.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1974&auto=format&fit=crop"
            alt="MileHigh Global Distribution Network"
            className={styles.aboutImage}
          />
        </div>
      </section>

      {/* Distribution Services */}
      <section className={styles.section} id="dist-services">
        <h2 className={styles.sectionTitle}>Distribution Services</h2>
        <div className={styles.services}>
          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>🎬</span>
            <h3>Theatrical Release</h3>
            <p>Worldwide theatre release management with strategic screen planning and premiere coordination.</p>
          </div>

          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>📺</span>
            <h3>OTT Distribution</h3>
            <p>Digital and streaming platform releases across Netflix, Prime Video, ZEE5 and more.</p>
          </div>

          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>🌍</span>
            <h3>Overseas Rights</h3>
            <p>International theatrical distribution and overseas market management.</p>
          </div>

          <div className={styles.serviceCard}>
            <span className={styles.serviceIcon}>📡</span>
            <h3>Satellite Rights</h3>
            <p>Television broadcasting partnerships with leading satellite channels.</p>
          </div>
        </div>
      </section>

      {/* Current Releases */}
      <section className={styles.section} id="dist-releases">
        <h2 className={styles.sectionTitle}>Current Releases</h2>
        <div className={styles.movies}>
          <div className={styles.movieCard}>
            <img
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&auto=format&fit=crop"
              alt="Shadow Hunter Movie Poster"
              className={styles.movieCardImage}
            />
            <div className={styles.movieOverlay}>
              <div className={styles.movieInfo}>
                <span className={styles.movieBadge}>Worldwide Release</span>
                <h3>Shadow Hunter</h3>
                <p>Action Thriller • 2026</p>
              </div>
            </div>
          </div>

          <div className={styles.movieCard}>
            <img
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1074&auto=format&fit=crop"
              alt="Last Signal Movie Poster"
              className={styles.movieCardImage}
            />
            <div className={styles.movieOverlay}>
              <div className={styles.movieInfo}>
                <span className={styles.movieBadge}>OTT Release</span>
                <h3>Last Signal</h3>
                <p>Crime Drama • Streaming Now</p>
              </div>
            </div>
          </div>

          <div className={styles.movieCard}>
            <img
              src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1074&auto=format&fit=crop"
              alt="Beyond Sky Movie Poster"
              className={styles.movieCardImage}
            />
            <div className={styles.movieOverlay}>
              <div className={styles.movieInfo}>
                <span className={styles.movieBadge}>Overseas Release</span>
                <h3>Beyond Sky</h3>
                <p>Sci-Fi Adventure • Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide Reach */}
      <section className={styles.section} id="dist-countries">
        <h2 className={styles.sectionTitle}>Worldwide Reach</h2>
        <div className={styles.countries}>
          <div className={styles.countryCard}>
            <span className={styles.countryFlag}>🇮🇳</span>
            <h3>India</h3>
          </div>
          <div className={styles.countryCard}>
            <span className={styles.countryFlag}>🇦🇪</span>
            <h3>UAE</h3>
          </div>
          <div className={styles.countryCard}>
            <span className={styles.countryFlag}>🇺🇸</span>
            <h3>USA</h3>
          </div>
          <div className={styles.countryCard}>
            <span className={styles.countryFlag}>🇸🇬</span>
            <h3>Singapore</h3>
          </div>
          <div className={styles.countryCard}>
            <span className={styles.countryFlag}>🇲🇾</span>
            <h3>Malaysia</h3>
          </div>
          <div className={styles.countryCard}>
            <span className={styles.countryFlag}>🇬🇧</span>
            <h3>UK</h3>
          </div>
        </div>
      </section>

      {/* Release Timeline */}
      <section className={styles.section} id="dist-timeline">
        <h2 className={styles.sectionTitle}>Release Timeline</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineStep}>
            <span className={styles.timelineNumber}>01</span>
            <h3>Production</h3>
            <p>Film completion & quality review</p>
          </div>
          <div className={styles.timelineConnector} />
          <div className={styles.timelineStep}>
            <span className={styles.timelineNumber}>02</span>
            <h3>Marketing</h3>
            <p>Campaign strategy & promotions</p>
          </div>
          <div className={styles.timelineConnector} />
          <div className={styles.timelineStep}>
            <span className={styles.timelineNumber}>03</span>
            <h3>Distribution</h3>
            <p>Rights negotiation & deals</p>
          </div>
          <div className={styles.timelineConnector} />
          <div className={styles.timelineStep}>
            <span className={styles.timelineNumber}>04</span>
            <h3>Theatre Release</h3>
            <p>Worldwide premiere & screenings</p>
          </div>
          <div className={styles.timelineConnector} />
          <div className={styles.timelineStep}>
            <span className={styles.timelineNumber}>05</span>
            <h3>OTT Release</h3>
            <p>Digital streaming availability</p>
          </div>
        </div>
      </section>

      {/* Distribution Partners */}
      <section className={styles.section} id="dist-partners">
        <h2 className={styles.sectionTitle}>Distribution Partners</h2>
        <div className={styles.partnersMarquee}>
          <div className={styles.partnerTrack}>
            <div className={styles.partnerLogo}><h3>NETFLIX</h3></div>
            <div className={styles.partnerLogo}><h3>PRIME VIDEO</h3></div>
            <div className={styles.partnerLogo}><h3>PVR INOX</h3></div>
            <div className={styles.partnerLogo}><h3>ZEE5</h3></div>
            <div className={styles.partnerLogo}><h3>SUN TV</h3></div>
            <div className={styles.partnerLogo}><h3>HOTSTAR</h3></div>
            {/* Duplicate set for seamless infinite scroll */}
            <div className={styles.partnerLogo}><h3>NETFLIX</h3></div>
            <div className={styles.partnerLogo}><h3>PRIME VIDEO</h3></div>
            <div className={styles.partnerLogo}><h3>PVR INOX</h3></div>
            <div className={styles.partnerLogo}><h3>ZEE5</h3></div>
            <div className={styles.partnerLogo}><h3>SUN TV</h3></div>
            <div className={styles.partnerLogo}><h3>HOTSTAR</h3></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta} id="dist-cta">
        <h2 className={styles.ctaTitle}>
          Your Story Deserves<br />
          A Global Audience
        </h2>
        <div className={styles.ctaButton}>
          <button className={`${styles.btn} ${styles.goldBtn}`} id="dist-start-btn">
            Start Distribution
          </button>
        </div>
      </section>
    </>
  );
}
