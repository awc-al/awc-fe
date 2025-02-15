"use client"; // Ensures animations work smoothly

import { useState, useEffect } from "react";
import styles from "@/styles/hero.module.css";
import LineComponent from "./Line";
import { motion } from "framer-motion";

const images = [
    "/hero/IMG_3749-min.jpg",
    "/hero/IMG_3752-min.jpg",
    "/hero/IMG_3755-min.jpg",
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <div className={styles.hero}>
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}

                <div className={styles.overlay}>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} // Ensures the animation only happens once
                        transition={{ duration: 1 }}
                    >
                        <h1>Plan Your Dream Event</h1>
                        <p>From weddings to birthdays, we make every event unforgettable.</p>
                    </motion.div>
                    <button className={styles.reserveBtn}>Reserve Now</button>
                </div>
            </div>
            <div className={styles.lineContainer}>
                <LineComponent />
            </div>
        </section>
    );
};

export default Hero;
