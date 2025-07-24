import styles from "./FooterInfo.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

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
          <FaPhone className={styles.icon} />
          <div>
            <p> +47 412 75 229</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FooterInfo;
