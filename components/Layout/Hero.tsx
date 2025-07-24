import styles from "./Hero.module.css";
import classNames from "classnames";
import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  videoSrc?: string;
  height?: "full" | "medium" | "small";
  overlay?: boolean;
  quality?: number;
  imagePosition?: string;
};

const Hero = ({
  title,
  subtitle,
  imageSrc,
  videoSrc,
  height = "medium",
  overlay = true,
  quality = 100,
  imagePosition="top"
}: Props) => {
  const heroClass = classNames(styles.hero, {
    [styles.full]: height === "full",
    [styles.medium]: height === "medium",
    [styles.small]: height === "small",
    [styles.noMedia]: !videoSrc && !imageSrc
    
  });

  return (
    <section className={heroClass}>
      {/* Video background */}
      {videoSrc && (
        <video className={styles.bgVideo} autoPlay muted loop playsInline>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Image background */}
      {!videoSrc && imageSrc && (
        <Image
          src={imageSrc}
          alt="Hero background"
          fill
          quality={quality}
          priority
          className={styles.bgImage}
          style={{ objectPosition: imagePosition || "center" }}
        />
      )}

      {/* Optional overlay */}
      {overlay && <div className={styles.hasOverlay} />}

      {/* Content */}
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
