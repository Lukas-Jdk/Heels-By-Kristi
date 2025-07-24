import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./BurgerButton.module.css";

const BurgerButton = ({
  onClick,
  color = "white",
}: {
  onClick: () => void;
  color?: string;
}) => (
  <button className={styles.burger} onClick={onClick} aria-label="Open menu">
    <RxHamburgerMenu className={styles.burgerIcon} style={{ color }} />
  </button>
);

export default BurgerButton;
