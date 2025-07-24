import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import BurgerButton from "./BurgerButton";
import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    };
    window.addEventListener("scroll", handleScroll);
    return() => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : styles.transparent}`}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.left}>
     <BurgerButton onClick={() => setMenuOpen(true)} color={scrolled ? "black" : "white"} />
            <Logo variant={scrolled ? "dark" : "light"}
             scrolled={scrolled} 
            />
          </div>

          <NavBar variant={scrolled ? "dark" : "light"} />

          {menuOpen && (
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
