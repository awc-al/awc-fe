import styles from "@/styles/servicesCardHome.module.css";
import { ServicesCardProps } from "@/types/ServicesType";

export default function ServicesCardHome({ title, imageSrc, altText }: ServicesCardProps) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>
                {title.charAt(0).toUpperCase() + title.slice(1)}
            </h2>
            <img className={styles.image} src={imageSrc} alt={altText || title} />
        </div>
    );
}
