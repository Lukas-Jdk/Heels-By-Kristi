import styles from "./TestimonialsCard.module.css";
import ProgramsDescription from './ProgramsDescription'

type Props = {
  text: string;
  name: string;
  role?: string;
};

const TestimonialCard = ({ text, name, role = "Student" }: Props) => {
  return (
    <div className={styles.card}>
      <p className={styles.text}>&ldquo;{text}&rdquo;</p>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}>
        </div>
        <div className={styles.info}>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default TestimonialCard;