import styles from './GalleryModal.module.css';
import Image from 'next/image';
import { useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Props = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const GalleryModal = ({ images, currentIndex, onClose, onPrev, onNext }: Props) => {
  // Escape key close + arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          <FaTimes />
        </button>
        <button className={styles.prev} onClick={onPrev}>
          <FaChevronLeft />
        </button>
        <div className={styles.imageContainer}>
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            fill
            className={styles.image}
            sizes="100vw"
          />
        </div>
        <button className={styles.next} onClick={onNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
