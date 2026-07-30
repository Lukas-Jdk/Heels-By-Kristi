import styles from "./FooterInfo.module.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const FooterInfo = () => {
  return (
    <div className={styles.footerInfo}>
      <h2>Information</h2>
      <div className={styles.adressInfo}>
        <div className={styles.infoBlock}>
          <FaMapMarkerAlt className={styles.icon} />
          <div>
            <p>Eikenga 11, 0579 Oslo</p>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <FaMapMarkerAlt className={styles.icon} />
          <div>
            <p>Syretårnet 8, 3048 Drammen</p>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <FaMapMarkerAlt className={styles.icon} />
          <div>
            <p>Konstitucijos pr. 12, Vilnius, 09308 Lithuania</p>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <FaEnvelope className={styles.icon} />
          <div>
            <p className={styles.emailLink}>
              <a href="mailto:heelsbykristi@gmail.com" className={styles.link}>
                heelsbykristi@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <FaPhone className={styles.icon} />
          <div>
            <p>
              <a href="tel:+4741275229" className={styles.link}>
                +47 412 75 229 (Norway)
              </a>
            </p>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <FaPhone className={styles.icon} />
          <div>
            <p>
              <a href="tel:+4741275229" className={styles.link}>
                +370 604 94 611 (Lithuania)
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
