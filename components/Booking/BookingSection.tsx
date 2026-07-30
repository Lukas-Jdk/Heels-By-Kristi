import CityCard from "./CityCard";
import { City } from "../types/booking";
import styles from "../../styles/booking.module.css";

type BookingSectionProps = {
  cities: City[];
};

const BookingSection: React.FC<BookingSectionProps> = ({ cities }) => {
  return (
    <section className={styles.container}>
      <div className={styles.cards}>
        {cities.map((city) => (
          <CityCard key={city.name} city={city} />
        ))}
      </div>

      <div className={styles.info}>
        <p>1 clip = 1 class</p>

        <p>
          Classes must be paid for before the class begins. When purchasing a
          drop-in class, the purchase receipt must be shown to the teacher
          before the class.
        </p>

        <p>
          Clips cannot be shared, and classes cannot be transferred to another
          person. Classes are non-refundable in the event of force majeure –
          please contact the studio directly.
        </p>

        <p>Validity is calculated from the date of purchase:</p>

        <p>
          Drop-in (1 class): valid for 14 days
          <br />
          2 clips: valid for 21 days
          <br />
          5 clips: valid for 45 days
          <br />
          10 clips: valid for 95 days
          <br />
          15 clips: valid for 145 days
        </p>

        <p>Each clip represents one dance class!</p>
      </div>
    </section>
  );
};

export default BookingSection;
