import styles from './FooterLinks.module.css';
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
        <h2>Links</h2>
        <nav>
           <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About Us</Link></li>
      <li><Link href="/schedule">Schedule</Link></li>
      <li><Link href="/booking">Booking & Prices</Link></li>
      <li><Link href="/contact">Contact Us</Link></li>
      <li><Link href="/events">Events</Link></li>
      <li><Link href="/gallery">Gallery</Link></li>
    </ul>
        </nav>
      
      </div>
  )
}

export default FooterLinks