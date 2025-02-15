import styles from "@/styles/aboutUs.module.css";
import { AboutUsProps } from "@/types/ServicesType";
import { motion } from "framer-motion";

export default function AboutUs({
    title,
    description,
    imageSrcLarge,
}: AboutUsProps) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.largeImage} src={imageSrcLarge} alt="Main Wedding Image" />
            </div>
            <div className={styles.textContent}>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} // Ensures the animation only happens once
                    transition={{ duration: 1 }}
                >
                    <p>{title}</p>
                    <p>{description}</p>
                </motion.div>
            </div>
        </div>
    );
}
