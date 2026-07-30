import styles from "./ButtonGroup.module.css";
import Link from 'next/link';

const ButtonGroup = () => (
 
 <div className={styles.buttonGroup}>
    <Link href="/norway" className={styles.scheduleBtn}>NORWAY</Link>
    <Link href="/lithuania" className={styles.bookingBtn}>LITHUANIA</Link>
  </div>

 
);

export default ButtonGroup;