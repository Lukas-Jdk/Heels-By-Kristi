import styles from "./EnrollMiddle.module.css";
import { Calendar, User, MapPin } from "lucide-react";

const EnrollMiddle = () => {
  return (
    <div className={styles.enrollInfoWrapper}>
      <div className={styles.enrollDays}>
        <Calendar className={styles.iconCalandar} />
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
      </div>

      <div className={styles.enrollTeacher}>
        <User className={styles.iconUser} />
        <p>Kristina </p>
        <p>Aiste</p>
      </div>

      <div className={styles.enrollCity}>
        <MapPin className={styles.iconPin} />
        <p>Oslo</p>
        <p>Drammen</p>
      </div>
    
    </div>
  );
};

export default EnrollMiddle;
