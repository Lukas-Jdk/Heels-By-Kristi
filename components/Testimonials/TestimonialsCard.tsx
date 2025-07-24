import styles from "./TestimonialsCard.module.css";
import Avatar from "./Avatar";

type Props = {
  text: string;
  name: string;
  role?: string;
};

const TestimonialCard = ({ text, name, role = "Student" }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatarContainer}>
        <p className={styles.text}>&ldquo;{text}&rdquo;</p>
        <Avatar />
        <div className={styles.info}>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
