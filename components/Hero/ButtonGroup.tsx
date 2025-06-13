import styles from "./ButtonGroup.module.css";

const ButtonGroup = () => (
  <div className={styles.buttonGroup}>
    <a href="#schedule" className={styles.scheduleBtn}>SCHEDULE</a>
    <a href="#booking" className={styles.bookingBtn}>BOOKING & PRICES</a>
  </div>
);

export default ButtonGroup;