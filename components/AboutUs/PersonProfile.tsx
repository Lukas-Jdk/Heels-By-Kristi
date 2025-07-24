import styles from "./PersonProfile.module.css";
import Image from "next/image";

type PersonProfileProps = {
  name: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
  education?: string;
  profDev?: string;
};

const PersonProfile = ({
  name,
  description,
  imageUrl,
  reverse = false,
  education,
  profDev,
}: PersonProfileProps) => {
  return (
    <div
      className={`${styles.profileContainer} ${reverse ? styles.reverse : ""}`}
    >
      <div className={styles.profileTextWrapper}>
        <h2 className={styles.profileTitle}>About {name}</h2>
        <p className={styles.profileDescription}>{description}</p>

        {education && (
          <p className={styles.profileEducation}>
            <strong>Education:</strong> {education}
          </p>
        )}

        {profDev && (
          <p className={styles.profileProfDev}>
            <strong>Further professional development:</strong> {profDev}
          </p>
        )}
      </div>

      <div className={styles.imageWrapper}>
        <Image
          className={styles.profileImg}
          src={imageUrl}
          alt={name}
          width={570} 
          height={870} 
          quality={100}
         
          
        />
      </div>
    </div>
  );
};

export default PersonProfile;
