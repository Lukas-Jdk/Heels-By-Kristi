import styles from "./Overlay.module.css";
import ButtonGroup from "./ButtonGroup";

const Overlay = () => (
  <div className={styles.overlay}>
    <div className={styles.container}>
      <ButtonGroup />
    </div>
  </div>
);
export default Overlay;