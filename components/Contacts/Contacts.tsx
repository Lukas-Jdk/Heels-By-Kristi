import styles from "./Contacts.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import ContactMap from "./ContactMap";

const Contacts = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactInfo}>
        <div className={styles.titleBlock}>
          <div className={styles.bubble}></div>
          <div className={styles.bubbleSmall}></div>
          <h2 className={styles.title}>Where can you find us?</h2>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.iconTitle}>
            <FaMapMarkerAlt className={styles.icon} />
          </div>
          <div>
            <h4>FIND US <strong className={styles.markOsloWord}>OSLO</strong></h4>
            <p>Studio Dancify, 3rd floor, 2nd studio.</p>
            <p>
              <strong>Car:</strong> Free parking from 16:00 to 22:00, and on
              weekends, in spaces marked with: Fiberworks, Hagen VVS,
              Rørentreprenørenes Felleskontor, Kaph Entreprenør, Pioneer, Paid
              Guest Parking, marked with &quot;Mot Avgift...&quot;
            </p>
          
         
           
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.iconTitle}>
            <FaEnvelope className={styles.icon} />
          </div>
          <div>
            <h4>WRITE TO US</h4>
            <p><a href="mailto:heelsbykristi@gmail.com" className={styles.link}> heelsbykristi@gmail.com</a></p>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.iconTitle}>
            <FaPhone className={styles.icon} />
          </div>
          <div>
            <h4>CALL US</h4>
            <p><a href="tel:+4741275229" className={styles.link}>+47 412 75 229</a> (Norway)</p>
            <p><a href="tel:+37060494611" className={styles.link}>+370 604 94 611</a> (Lithuania)</p>
          </div>
        </div>
      </div>

      <ContactMap />
    </section>
  );
};

export default Contacts;
