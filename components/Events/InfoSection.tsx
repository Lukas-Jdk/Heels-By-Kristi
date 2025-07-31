import React from "react";
import styles from "./InfoSection.module.css";
import Bubbles from "../Bubbles/Bubbles";

interface InfoSectionProps {
  title: string;
  text: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, text }) => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.textContent}>
        <div className={styles.titleWrapper}>
          <Bubbles />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default InfoSection;
