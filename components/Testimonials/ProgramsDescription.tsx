import styles from "./ProgramsDescription.module.css";

type Props = {
  title?: string;
  subtitle?: string;
  extraText?: string;
  highlightWords?: number; 
};

const ProgramsDescription = ({
  title = "Programs for all levels and needs",
  subtitle,
  extraText,
  highlightWords = 3, 
}: Props) => {
  const words = title.split(" ");
  const highlighted = words.slice(0, highlightWords).join(" ");
  const rest = words.slice(highlightWords).join(" ");

  return (
    <div className={styles.programDescriptionContainer}>
      <h1>
        <span className={styles.spanCollor}>{highlighted}</span>
        {rest && ` ${rest}`}
      </h1>
      {subtitle && <p>{subtitle}</p>}
      {extraText && <h4>{extraText}</h4>}
    </div>
  );
};

export default ProgramsDescription;
