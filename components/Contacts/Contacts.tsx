import styles from "./Contacts.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import Bubbles from '../Bubbles/Bubbles'


const Contacts = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactInfo}>
        <Bubbles align="left"/>
        <h2 className={styles.title}>Where can you find us?</h2>

          <div className={styles.infoBlock}>
          <div className={styles.iconTitle}>
            <FaMapMarkerAlt className={styles.icon} />
          </div>
          <div>
            <h4>FIND US</h4>
          <p>Studio Dancify, 3rd floor, 2nd studio.</p>
          <p><strong>Address:</strong> Eikenga 11, 0579 Oslo</p>
          <p><strong>Car:</strong> Free parking 16.00-22.00.</p>
          <p><strong>Bus:</strong> 21 bus and a 5-minute walk.</p>
          <p><strong>Subway:</strong> subway stop Hasle and a 5-minute walk.</p>
          <p></p>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.iconTitle}>
            <FaEnvelope className={styles.icon} />
          </div>
          <div>
          <h4>WRITE TO US</h4>
          <p>info@heelsbykristi.no</p>
          </div>
        </div>



        <div className={styles.infoBlock}>
          <div className={styles.iconTitle}>
            <FaPhone className={styles.icon} />
          </div>
         <div>  
          <h4>CALL US</h4>
          <p>+47 412 75 229</p>
          </div>
        </div>

      </div>

      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2043.7874277097796!2d10.806915316114086!3d59.93221218187612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e7d0a9ff5c5%3A0x3f6e7a75b59e7425!2sEikenga%2011%2C%200579%20Oslo%2C%20Norway!5e0!3m2!1sen!2sno!4v1721305946000!5m2!1sen!2sno"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contacts;
