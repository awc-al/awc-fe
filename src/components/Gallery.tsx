import styles from "@/styles/gallery.module.css";
import LineComponent from "./Line";
import { useState } from "react";
import ImageGalleryModal from "./ImageGalleryModal";

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


    const images: string[] = [
        "/home-gallery/image.webp",
        "/home-gallery/image-3.webp",
        "/home-gallery/image-1.webp",
        "/home-gallery/image-5.webp",
        "/home-gallery/image-2.webp",
        "/home-gallery/image-4.webp"
    ];

    const openGallery = (index: number) => setSelectedIndex(index);
    const closeGallery = () => setSelectedIndex(null);
    const prevImage = () => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
    const nextImage = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));


    return (
        <>
            <div className={styles.galleryContainerDesktop}>
                <div className={styles.galleryGrid}>
                    <div className={styles.leftSide}>
                        <div className={styles.imageWrapper}>
                            <img src="/home-gallery/image.webp" onClick={() => openGallery(0)} alt="albania wedding company" />
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src="/home-gallery/image-3.webp" onClick={() => openGallery(1)} alt="albania wedding company" />
                        </div>
                    </div>
                    <div className={styles.center}>
                        <h1 className={styles.galleryTitleMiddle}>OUR GALLERY</h1>
                        <div className={styles.lineContainerMiddle}>
                            <LineComponent />
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src="/home-gallery/image-1.webp" onClick={() => openGallery(2)} alt="albania wedding company" />
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src="/home-gallery/image-5.webp" onClick={() => openGallery(3)} alt="albania wedding company" />
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.imageWrapper}>
                            <img src="/home-gallery/image-2.webp" onClick={() => openGallery(4)} alt="albania wedding company" />
                        </div>
                        <div className={styles.imageWrapper}>
                            <img src="/home-gallery/image-4.webp" onClick={() => openGallery(5)} alt="albania wedding company" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.galleryContainerMobile}>
                <h1 className={styles.galleryTitleMiddleMobile}>OUR GALLERY</h1>
                <div className={styles.lineContainerMiddleMobile}>
                    <LineComponent />
                </div>
                <div className={styles.galleryGridMobile}>
                    <div className={styles.leftSideMobile}>
                        <div className={styles.imageWrapperMobile}>
                            <img src="/home-gallery-mob/image.webp" onClick={() => openGallery(0)} alt="albania wedding company" />
                        </div>
                        <div className={styles.imageWrapperMobile}>
                            <img src="/home-gallery-mob/image-3.webp" onClick={() => openGallery(1)} alt="albania wedding company" />
                        </div>
                    </div>
                    <div className={styles.centerMobile}>
                        <div className={styles.imageWrapperMobile}>
                            <img src="/home-gallery-mob/image-1.webp" onClick={() => openGallery(2)} alt="albania wedding company" />
                        </div>
                    </div>
                    <div className={styles.rightSideMobile}>
                        <div className={styles.imageWrapperMobile}>
                            <img src="/home-gallery-mob/image-2.webp" onClick={() => openGallery(3)} alt="albania wedding company" />
                        </div>
                        <div className={styles.imageWrapperMobile}>
                            <img src="/home-gallery-mob/image-4.webp" onClick={() => openGallery(4)} alt="albania wedding company" />
                        </div>
                    </div>
                </div>
            </div>
            <ImageGalleryModal
                images={images}
                selectedIndex={selectedIndex}
                onClose={closeGallery}
                onPrev={prevImage}
                onNext={nextImage}
                setIndex={setSelectedIndex}
            />
        </>
    );
}
