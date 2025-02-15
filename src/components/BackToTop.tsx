import { useEffect, useState } from "react";
import styles from "@/styles/backToTop.module.css";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`${styles.backToTop} ${isVisible ? styles.visible : ""}`}
            onClick={scrollToTop}
        >
            ↑
        </button>
    );
};

export default BackToTop;
