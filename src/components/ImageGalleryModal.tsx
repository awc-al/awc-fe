import { useEffect, useRef, useState } from "react";
import styles from "@/styles/imageGalleryModal.module.css";

interface ImageGalleryModalProps {
    images: string[];
    selectedIndex: number | null;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    setIndex: (index: number) => void;
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({ images, selectedIndex, onClose, onPrev, onNext, setIndex }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
        } else {
            document.body.style.overflow = "auto"; // Enable scrolling when modal closes
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedIndex]);

    // Handle Touch Events for Swipe
    const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
    const handleTouchMove = (e: React.TouchEvent) => setTouchEndX(e.touches[0].clientX);
    const handleTouchEnd = () => {
        if (touchStartX !== null && touchEndX !== null) {
            const swipeDistance = touchStartX - touchEndX;
            if (swipeDistance > 50) onNext(); // Swipe left → Next Image
            else if (swipeDistance < -50) onPrev(); // Swipe right → Previous Image
        }
        setTouchStartX(null);
        setTouchEndX(null);
    };

    if (selectedIndex === null) return null; // Don't render if modal is closed

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <button className={styles.closeButton} onClick={onClose}>&times;</button>

                {/* Main Image */}
                <div className={styles.imageContainer}>
                    <button className={styles.navButton} onClick={onPrev}>&#8249;</button>
                    <img src={images[selectedIndex]} alt="Gallery Preview" className={styles.modalImage} />
                    <button className={styles.navButton} onClick={onNext}>&#8250;</button>
                </div>

                {/* Thumbnails */}
                <div className={styles.thumbnailContainer}>
                    {images.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt="Thumbnail"
                            className={`${styles.thumbnail} ${idx === selectedIndex ? styles.activeThumbnail : ""}`}
                            onClick={() => setIndex(idx)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageGalleryModal;
