import styles from "./ZeroLevel.module.css";
import Link from 'next/link'

const ZeroLevel = () => {
  return (
    <div className={styles.zeroLevelWrapper}>
      <div className={styles.zeroLevelContainer}>
        <div className={styles.zeroIntro}>
          <h1>NEW ‘25 FALL SEASON CLASS</h1>
          <h2>NEW CLASS: ZERO-LEVEL BEGINNERS - HIGH HEELS </h2>
          <h3>Wednesdays | 17:30 - 19:00 | </h3>
          <p> Ready to start from zero? This brand new class is designed
            especially for total beginners — no experience needed!
          </p>
        </div>

        <div className={styles.zeroFocus}>
          <h2>We’ll focus on :</h2>
          <ul>
            <li>- Foundational technique</li>
            <li>- Basics + clean execution</li>
            <li>- Choreographies that are simple but built on everything you
              learnin class
            </li>
          </ul>

          <p>
            Perfect for those stepping into heels for the first time or anyone
            wanting to build a strong base before moving up. This isn’t just a
            class — it’s the start of your journey!
          </p>
          <Link className={styles.zeroBtn} href="/booking">BUY</Link>
        </div>
      </div>
    </div>
  );
};

export default ZeroLevel;
