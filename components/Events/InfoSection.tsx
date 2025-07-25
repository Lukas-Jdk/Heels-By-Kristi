import React from "react";
import styles from "./InfoSection.module.css";
import Image from "next/image";

interface InfoSectionProps {
  title: string;
  text: React.ReactNode;
  image: string;
  imagePosition?: "left" | "right";
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  text,
  image,
  imagePosition = "left",
}) => {
  const sectionClass = `${styles.sectionWrapper} ${
    imagePosition === "right" ? styles.reverse : ""
  }`;

  return (
    <div className={sectionClass}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.text}>{text}</div>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
          priority
        />
      </div>
    </div>
  );
};

export default InfoSection;
