import styles from "./ButtonGroup.module.css";
import Link from 'next/link';

const ButtonGroup = () => (
  <div className={styles.container}>
 <div className={styles.buttonGroup}>
    <Link href="/schedule" className={styles.scheduleBtn}>SCHEDULE</Link>
    <Link href="/booking" className={styles.bookingBtn}>BOOKING & PRICES</Link>
  </div>
  </div>
 
);

export default ButtonGroup;