import styles from './ContactMap.module.css'

const ContactMap = () => {
  return (
     <div className={styles.mapContainer}>
        <h1>OSLO</h1>
        <p><strong>Address:</strong> Eikenga 11, 0579 Oslo</p>
         <p><strong>FREE PARKING from 16:00 to 22:00</strong></p>
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
            <div>
        <h1 className={styles.mapDremmenText}>DRAMMEN</h1>
        <p><strong>Address:</strong> Syretårnet 8, 3048 Drammen</p>
        <p><strong>FREE PARKING</strong></p>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10145.372013329308!2d10.1926528!3d59.7428121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464123e0b040e0d3%3A0xf7e10a51cc6d66d9!2sSyret%C3%A5rnet%208%2C%203048%20Drammen%2C%20Norway!5e0!3m2!1sen!2sno!4v1722345678000!5m2!1sen!2sno"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      </div>
  )
}

export default ContactMap