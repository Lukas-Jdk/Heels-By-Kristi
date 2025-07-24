import styles from "./ScheduleCity.module.css";
import ScheduleItem from "./ScheduleItem";
import Image from "next/image";

type ScheduleItemData = {
  day: string;
  level: string;
  time: string;
  teacher: string;
};

type CityScheduleProps = {
  city: string;
  schedule: ScheduleItemData[];
};

const CitySchedule = ({ city, schedule }: CityScheduleProps) => {
  return (
    <div className={styles.cityWrapper}>
      <div className={styles.header}>
        <Image
          className={styles.image}
          src="https://img.pikbest.com/wp/202344/light-gray-background-design-abstract-grey-color-dark-black-and-with-old-wall-texture-of-cement-illuminated-by-white-gradient_9898524.jpg!w700wp"
          alt={`${city} Schedule`}
          width={500} 
          height={400} 
          unoptimized 
          priority
        />
        <div className={styles.title}>
          <span>{city}</span>
          <h2>Schedule</h2>
        </div>
      </div>

      <div className={styles.items}>
        {schedule.map((item, index) => (
          <ScheduleItem
            key={index}
            day={item.day}
            level={item.level}
            time={item.time}
            teacher={item.teacher}
          />
        ))}
      </div>
    </div>
  );
};

export default CitySchedule;
