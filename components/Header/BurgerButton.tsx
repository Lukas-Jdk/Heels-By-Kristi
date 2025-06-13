import { RxHamburgerMenu } from 'react-icons/rx';
import styles from './BurgerButton.module.css';

const BurgerButton = ({onClick}: {onClick: () => void}) => (
<button 
className={styles.burger} 
onClick={onClick} 
aria-label="Open menu">
  <RxHamburgerMenu className={styles.burgerIcon}/>
</button>
);

export default BurgerButton;