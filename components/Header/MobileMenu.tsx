import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import styles from "./Mobile.module.css";
import Image from 'next/image'

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <nav className={`${styles.MobileNavBar} ${isOpen ? styles.open : ''}`}>
    <button
      className={styles.closeBtn}
      onClick={onClose}
      arial-label="Close menu"
    >
      <RxCross2 />
    </button>
    <div className={styles.logo}>
      <Link href="/">
      <Image
      src ='/media/logo/logo2.png'
      alt = 'Heels By Kristi Logo'
      width={150}
      height={100}
      />
   
    </Link>
    </div>
    <ul>
      <li><Link href="/">HOME</Link></li>
      <li><Link href="/about">ABOUT US</Link></li>
      <li><Link href="/#schedule">SCHEDULE</Link></li>
      <li><Link href="/#booking">BOOKING & PRICES</Link></li>
      <li><Link href="/contact">CONTACT US</Link></li>
      <li><Link href="/events">EVENTS</Link></li>
      <li><Link href="/gallery">GALLERY</Link></li>
    </ul>
  </nav>
);

export default MobileMenu;
