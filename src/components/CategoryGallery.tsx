import Image from "next/image";
import styles from "@/styles/categoryGallery.module.css";

type ImageType = {
    src: string;
    alt: string;
};

type CategoryGalleryProps = {
    images: ImageType[];
};
const CategoryGallery: React.FC<CategoryGalleryProps> = ({ images }) => {
    return (
        <div className={styles.gallery}>
            {images.map((img, index) => (
                <div key={index} className={`${styles.galleryItem} ${styles[`item${index % 10}`]}`}>
                    <Image src={img.src} alt={img.alt} width={300} height={300} className={styles.image} />
                </div>
            ))}
        </div>
    );
};

export default CategoryGallery;
