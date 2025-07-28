import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import BurgerButton from "./BurgerButton";
import NavBar from "./NavBar";
import classNames from "classnames";

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={classNames(styles.headerWrapper, {
        [styles.scrolled]: scrolled,
        [styles.transparent]: !scrolled,
      })}
      role="banner"
      aria-label="Main site header"
    >
      <div className="container">
        <div className={styles.header}>
          <div className={styles.left}>
            <BurgerButton
              onClick={() => setMenuOpen(!menuOpen)}
              color={scrolled ? "black" : "white"}
              aria-label="Open navigation menu"
            />
            <Logo variant={scrolled ? "dark" : "light"} scrolled={scrolled} />
          </div>

          <NavBar variant={scrolled ? "dark" : "light"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
