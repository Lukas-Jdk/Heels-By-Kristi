import styles from "./Hero.module.css";
import classNames from "classnames";

type Props = {
  title: string;
  subtitle?: string;
  imageSrc?: string;          
  videoSrc?: string;         
  height?: "full" | "medium"; 
};

const Hero = ({
  title,
  subtitle,
  imageSrc,
  videoSrc,
  height = "medium",
}: Props) => {
  const heroClass = classNames(styles.hero, {
    [styles.full]:   height === "full",
    [styles.medium]: height === "medium",
  });

  return (
    <section className={heroClass}>
      {videoSrc ? (
        <video className={styles.bgVideo} autoPlay muted loop playsInline>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className={styles.bgImage}
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}

      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    
    </section>
  );
};

export default Hero;
