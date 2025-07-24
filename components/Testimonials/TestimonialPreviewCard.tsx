import styles from "./TestimonialPreviewCard.module.css";

type Props = {
  text: string;
  name: string;
  role?: string;
};

const TestimonialPreviewCard = ({
  text,
  name,
  role = "Student",
}: Props) => {
  return (
    <div className={styles.card}>
      <p className={styles.text}>&ldquo;{text}&rdquo;</p>
      <div className={styles.avatarSection}>
      
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPreviewCard;
