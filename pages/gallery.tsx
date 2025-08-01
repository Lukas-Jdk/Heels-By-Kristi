import styles from "@/styles/gallery.module.css";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Layout/Hero";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

const GalleryModal = dynamic(
  () => import("@/components/GalleryModal/GalleryModal"),
  { ssr: false }
);

const images = [
  "/media/Heels0.jpg",
  "/media/22LR.jpg",
  "/media/Heels8.jpg",
  "/media/Heels75.jpg",
  "/media/16LR.jpg",
  "/media/Heels7.jpg",
  "/media/Heels2.jpg",
  "/media/Heels.jpg",
  "/media/Heelsby4.jpg",
  "/media/aiste1.jpg",
   "/media/27LR.jpg",
   "/media/Heelsby67.jpg",
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const nextImage = () =>
    setSelectedIndex((prev) => (prev! + 1) % images.length);
  const prevImage = () =>
    setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);

  return (
    <Layout>
      <Hero title="Gallery" height="small" />
      <section className={styles.gallery}>
        {images.map((src, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => openModal(index)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </section>

      {selectedIndex !== null && (
        <GalleryModal
          images={images}
          currentIndex={selectedIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </Layout>
  );
};

export default Gallery;
