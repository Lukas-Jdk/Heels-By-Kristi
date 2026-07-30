import styles from "./ZeroLevel.module.css";
import Link from "next/link";

const ZeroLevel = () => {
  return (
    <div className={styles.zeroLevelWrapper}>
      <div className={styles.zeroLevelContainer}>
        <div className={styles.zeroIntro}>
          <h1>NEW ’26 FALL SEASON CLASS</h1>
          <h2>NEW CLASS: OPEN LEVEL – HIGH HEELS (VILNIUS)</h2>
          <h3>Mondays | 19:45–21:15</h3>

          <p>
            Our Open Level class welcomes both beginners and experienced
            dancers. Whether it’s your first time dancing in heels or you’re
            looking to refine your skills, this class is for you.
          </p>
        </div>

        <div className={styles.zeroFocus}>
          <h2>We’ll focus on :</h2>
          <ul>
            <li>- High heels technique</li>
            <li>- Body strengthening and control</li>
            <li>- Balance, posture, and confidence</li>
            <li>- Choreography that helps you grow every week</li>
          </ul>

          <p>
            Come learn, challenge yourself, and be part of our supportive heels
            community!
          </p>
          <Link className={styles.zeroBtn} href="/lithuania">
            BUY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZeroLevel;
