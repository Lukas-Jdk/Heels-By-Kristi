import styles from "./Footer.module.css";
import FooterInfo from "./FooterInfo";
import FooterSocial from "./FooterSocial";
import FooterLinks from "./FooterLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <FooterInfo />
        <FooterLinks />
        <FooterSocial />
      </div>
        <p className={styles.policy}>© 2025 Heels by Kristi. All rights reserved. 
          <Link href="/policy" className={styles.policyLink}> Studio Policy</Link>
          </p>
    </footer>
  );
};

export default Footer;
