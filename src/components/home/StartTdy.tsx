"use client";
import "@/app/css/home/StartTdy.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState("");

    const fullText = "Cinema Begins Here";

    // 👁️ viewport trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.4 }
        );

        const current = sectionRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    // 🔥 safe typing animation (FIXED)
    useEffect(() => {
        if (!isVisible) return;

        let i = 0;
        let mounted = true;

        // setText(""); // safe now because it's not conflicting render loop

        const interval = setInterval(() => {
            if (!mounted) return;

            setText(fullText.slice(0, i));
            i++;

            if (i > fullText.length) {
                clearInterval(interval);
            }
        }, 90);

        return () => {
            mounted = false;
            clearInterval(interval);
        };
    }, [isVisible]);

    return (
        <main className="home">

            <div className="film-grain" />
            <div className="lens-flare flare1" />
            <div className="lens-flare flare2" />

            <section className="hero" ref={sectionRef}>
                <div className="hero-overlay" />

                <div className="hero-content">

                    <motion.div
                        className="badge"
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    >
                        From Script to Screen
                    </motion.div>

                    <h1 className="title">
                        {text}
                        <span className="cursor">|</span>
                    </h1>

                    <motion.p
                        className="subtitle"
                        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    >
                        We craft powerful ideas into cinematic experiences — from production to global distribution.
                    </motion.p>

                    <motion.div className="buttons">

                        <motion.button
                            className="btn primary"
                            onClick={() => router.push("/contact")}
                            whileHover={{
                                scale: 1.08,
                                boxShadow: "0px 0px 25px rgba(201,162,78,0.6)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🎥 Start Project
                        </motion.button>

                        <motion.button
                            className="btn secondary"
                            whileHover={{
                                scale: 1.08,
                                borderColor: "#c9a24e"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🎬 Watch Reel
                        </motion.button>

                    </motion.div>

                </div>
            </section>
        </main>
    );
}