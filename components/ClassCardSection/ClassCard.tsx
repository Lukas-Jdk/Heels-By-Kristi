import styles from "./ClassCard.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  text: string;
  imageUrl: string;
  link: string;
};

const ClassCard = ({ title, text, imageUrl, link }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
        src={imageUrl} 
        alt={title} 
        fill className={styles.image} 
        sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className={styles.textBox}>
        <div className={styles.marker} />
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{text}</p>
          <Link href={link} className={styles.viewMore}>
            View More →
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ClassCard;
