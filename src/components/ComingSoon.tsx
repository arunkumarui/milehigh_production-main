"use client";

interface ComingSoonProps {
  pageTitle: string;
  pageSubtitle?: string;
}

export default function ComingSoon({ pageTitle, pageSubtitle }: ComingSoonProps): React.JSX.Element {
  return (
    <section className="coming-soon-section">
      {/* Background Glow */}
      <div className="coming-soon-bg"></div>

      {/* Decorative Elements */}
      <div className="deco-line deco-line-left"></div>
      <div className="deco-line deco-line-right"></div>
      <div className="deco-circle deco-circle-1"></div>
      <div className="deco-circle deco-circle-2"></div>

      {/* Content */}
      <div className="coming-soon-content">
        <div className="coming-soon-badge animate-fade-in-up" style={{ opacity: 0 }}>
          ★ Mile High Production
        </div>

        <h1 className="coming-soon-title animate-fade-in-up animation-delay-1" style={{ opacity: 0 }}>
          {pageTitle}
          <span>Coming Soon</span>
        </h1>

        <div className="coming-soon-divider animate-fade-in animation-delay-2" style={{ opacity: 0 }}></div>

        <p className="coming-soon-subtitle animate-fade-in-up animation-delay-3" style={{ opacity: 0 }}>
          {pageSubtitle || "We're working on something extraordinary. Stay tuned for an experience that redefines cinema."}
        </p>

        <p className="coming-soon-label animate-fade-in animation-delay-4" style={{ opacity: 0 }}>
          Under Construction
        </p>
      </div>
    </section>
  );
}
