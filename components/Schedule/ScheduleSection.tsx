import styles from "./ScheduleSection.module.css";
import ScheduleCity from "./ScheduleCity";


const osloSchedule = [
  {
    day: "MONDAYS",
    level: "Basic Beginners",
    time: "17.30 - 19.00",
    teacher: "Kristina",
  },
];
const osloScheduleInter = [
  {
    day: "Mondays",
    level: "Intermediate Beginners",
    time: "19.00 - 20.30",
    teacher: "Kristina",
  },
];
const osloScheduWednesdays = [
  {
    day: "WEDNESDAYS ",
    level: "Zero Level Beginners",
    time: "17.30 - 19.00",
    teacher: "Kristina",
  },
];
const drammenSchedule = [
  {
    day: "TUESDAYS",
    level: "Basic Beginners",
    time: "19.45 - 21.00",
    teacher: "Aiste",
  },
];


const ScheduleSection = () => {
  return (
      <div className={styles.container}>     
      <div className={styles.cityWrapper}>
      <ScheduleCity city="Oslo" schedule={[...osloSchedule, ...osloScheduleInter, ...osloScheduWednesdays]} />
      <ScheduleCity city="Drammen" schedule={[...drammenSchedule]} />
      </div>
  
      </div>
  
  )
}

export default ScheduleSection;