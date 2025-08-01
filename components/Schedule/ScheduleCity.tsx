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
  imageUrl: string;
  imagePosition?: string;
};

const CitySchedule = ({ city, schedule, imageUrl, imagePosition = "center" }: CityScheduleProps) => {
  return (
    <div className={styles.cityWrapper}>
      <div className={styles.header}>
        <Image
          className={styles.image}
          src={imageUrl}
          alt={`${city} Schedule`}
          width={1000}
          height={720}
          
          priority
       
          style={{ objectPosition: imagePosition }}
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
