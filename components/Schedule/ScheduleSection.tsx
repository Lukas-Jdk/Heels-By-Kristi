import styles from "./ScheduleSection.module.css";
import ScheduleCity from "./ScheduleCity";

const osloSchedule = [
  {
    day: "MONDAYS",
    level: "Zero Level Beginners",
    time: "17.30 - 19.00",
    teacher: "Aiste",
  },
];
const osloScheduleInter = [
  {
    day: "MONDAYS",
    level: "Open Level",
    time: "19.00 - 20.30",
    teacher: "Aiste",
  },
];
// const osloScheduWednesdays = [
//   {
//     day: "WEDNESDAYS ",
//     level: "Zero Level Beginners",
//     time: "17.30 - 19.00",
//     teacher: "Kristina",
//   },
// ];
const drammenSchedule = [
  {
    day: "TUESDAYS",
    level: "Zero Level Beginners",
    time: "19.30 - 20.45",
    teacher: "Aiste",
  },
];

const ScheduleSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cityWrapper}>
        <ScheduleCity
          city="Oslo"
          schedule={[
            ...osloSchedule,
            ...osloScheduleInter,
            // ...osloScheduWednesdays,
          ]}
          imageUrl= "/media/Heels4.jpg"
          imagePosition="center 45%"
          
        />
        <ScheduleCity 
        city="Drammen" 
        schedule={[...drammenSchedule]} 
        imageUrl= "/media/aiste2.jpg"
         imagePosition="center"
        />
      </div>
    </div>
  );
};

export default ScheduleSection;
