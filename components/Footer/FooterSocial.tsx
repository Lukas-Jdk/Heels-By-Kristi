import styles from './FooterSocial.module.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const FooterSocial = () => {
  return (
    <div className={styles.footerInfo}>
      <h2>Follow us</h2>
      <nav>
        <ul className={styles.socialList}>
          <li>
            <a
              className={styles.link}
              href="https://www.facebook.com/heelsbykristi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className={styles.iconFb} />Facebook</a>
          </li>
          
          <li>
            <a
              className={styles.link}
              href="https://www.instagram.com/heelsbykristi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.iconInst} />
              Instagram
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FooterSocial;
