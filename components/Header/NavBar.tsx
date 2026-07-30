import Link from "next/link";
import styles from "./NavBar.module.css";

type Props = {
  variant: "light" | "dark";
};

const NavBar: React.FC<Props> = ({ variant }) => (
  <nav className={styles.navBar} aria-label="Main navigation">
    <ul className={variant === "light" ? styles.navLight : styles.navDark}>
      <li>
        <Link href="/">HOME</Link>
      </li>
      <li>
        <Link href="/about">ABOUT US</Link>
      </li>
      <li>
        <Link href="/norway">NORWAY</Link>
      </li>
      <li>
        <Link href="/lithuania">LITHUANIA</Link>
      </li>
      <li>
        <Link href="/our-classes">OUR CLASSES</Link>
      </li>
      <li>
        <Link href="/contact">CONTACT US</Link>
      </li>
      <li>
        <Link href="/events">EVENTS</Link>
      </li>
      <li>
        <Link href="/gallery">GALLERY</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
