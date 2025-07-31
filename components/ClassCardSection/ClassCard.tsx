import styles from "./ClassCard.module.css";
import Link from "next/link";

type Props = {
  title: string;
  text: string;
  link: string;
};
const ClassCard = ({ title, text, link }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.textBox}>
        <div className={styles.marker} />
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <div className={styles.bubble}></div>
              <div className={styles.bubbleSmall}></div>
            <h3>{title}</h3>
          </div>
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
