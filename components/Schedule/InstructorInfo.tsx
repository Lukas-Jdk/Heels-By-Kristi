import styles from "./InstructorInfo.module.css";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

type Props = {
  name: string;
  details: string;
};

const InstructorInfo = ({ name, details }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.left}>
          <span className={styles.icon}><FaUserAlt  /></span>
          <span className={styles.label}>Instructor {name}</span>
        </div>
        <button className={styles.toggle} onClick={() => setOpen(!open)}>
          {open ? "−" : "+"}
        </button>
      </div>

      {open && <p className={styles.details}>{details}</p>}
    </div>
  );
};

export default InstructorInfo;