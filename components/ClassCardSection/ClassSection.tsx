import styles from './ClassSection.module.css';
import Image from 'next/image';

const ClassSection = () => {
  return (
    <section className={styles.wrapper}>
       <h1 className={styles.title1}>Workshop</h1>
      <div className={styles.banner}>
        <Image
          src="/media/heels-workshop-neidi-kull.webp"
          alt="Heels Workshop with Neidi Kull from Estonia"
          fill
          className={styles.image}
          priority
        />
        <div className={styles.overlay} />
       
        <div className={styles.textWrap}>
          <div className={styles.text}>
            <p className={styles.title}>
              HEELS WORKSHOP WITH NEIDI KULL FROM ESTONIA!
            </p>
            <p className={styles.date}>September 12th</p>
            <div className={styles.divider} />
            <p className={styles.detail}>Time - 14.00-16.00</p>
            <p className={styles.detail}>
              Location - Eikenga 11, Oslo. Studio Heels by Kristi
            </p>
            <p className={styles.detail}>All info in our Instagram profile!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassSection;
