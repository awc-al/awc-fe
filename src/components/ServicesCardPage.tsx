import Image from "next/image";
import styles from "@/styles/servicesCardPage.module.css";
import { ServicesCardProps } from "@/types/ServicesType";

const ServicesCardPage: React.FC<ServicesCardProps> = ({ imageSrc, title, items, altText }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image src={imageSrc} alt={title} width={275} height={134} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3>{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
                <ul>
                    {items?.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServicesCardPage;
