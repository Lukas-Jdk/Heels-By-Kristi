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
      <li><Link href="/norway">Norway</Link></li>
      <li><Link href="/lithuania">Lithuania</Link></li>
      <li><Link href="/our-classes">Our Classes</Link></li>
      <li><Link href="/contact">Contact Us</Link></li>
      <li><Link href="/events">Events</Link></li>
      <li><Link href="/gallery">Gallery</Link></li>
    </ul>
        </nav>
      
      </div>
  )
}

export default FooterLinks