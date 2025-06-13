import { useState } from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import BurgerButton from "./BurgerButton";
import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.headerWrapper}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.left}>
            {!menuOpen && <BurgerButton onClick={() => setMenuOpen(true)} />}
            <Logo />
          </div>

          <NavBar />

          {menuOpen && (
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
