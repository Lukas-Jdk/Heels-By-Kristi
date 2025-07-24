import React from 'react';
import styles from './InfoSection.module.css';
import Image from 'next/image';

interface InfoSectionProps {
  title: string;
  text: React.ReactNode;
  image: string;
  imagePosition?: 'left' | 'right';
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  text,
  image,
  imagePosition = 'left',
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div className={styles.sectionWrapper}>
      {isImageLeft && (
        <Image src={image} alt={title} className={styles.image} />
      )}

      <div className={styles.textContent}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.text}>{text}</div>
      </div>

      {!isImageLeft && (
        <Image src={image} alt={title} className={styles.image} />
      )}
    </div>
  );
};

export default InfoSection;
