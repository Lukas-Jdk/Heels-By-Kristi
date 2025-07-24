import styles from './ScheduleItem.module.css';
import { MdLocationOn, MdPerson } from "react-icons/md";

type ScheduleItemProps = {
  day:string;
  level:string;
  time:string;
  teacher:string;
};

const ScheduleItem = ({day, level, time, teacher} : ScheduleItemProps) => {
  return(
<div className={styles.itemWrapper}>
    <div className={styles.leftSide}>
      <h2>{day}</h2>
      <p className={styles.iconText}>
        <MdLocationOn className={styles.icon} />
        {level}
      </p>
    </div>
    <div className={styles.rightSide}>
      <h2>{time}</h2>
      <p className={styles.iconText}>
        <MdPerson className={styles.icon} />
        Teacher {teacher}
      </p>
    </div>
  </div>
  )
};
export default ScheduleItem;