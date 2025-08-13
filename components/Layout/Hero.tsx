import styles from "./Hero.module.css";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  videoSrc?: string;
  height?: "full" | "medium" | "small";
  overlay?: boolean;
  quality?: number;
  imagePosition?: string;
   priority?: boolean;
   
};

const Hero = ({
  title,
  subtitle,
  imageSrc,
  videoSrc,
  height = "medium",
  overlay = true,
  quality = 100,
  imagePosition = "center",
  priority = false,
}: Props) => {
  const heroClass = classNames(styles.hero, {
    [styles.full]: height === "full",
    [styles.medium]: height === "medium",
    [styles.small]: height === "small",
    [styles.noMedia]: !videoSrc && !imageSrc,
  });

  return (
    <section className={heroClass}>
      {/* MP4 Video */}
      {videoSrc && (
        <video
          className={styles.bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
            <track
      src="/captions.vtt"
      kind="captions"
      srcLang="en"
      label="English"
    />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback Image (jei videoSrc nėra) */}
      {!videoSrc && imageSrc && (
        <Image
          src={imageSrc}
          alt="Hero background"
          fill
          quality={quality}
          priority={priority}
          className={styles.bgImage}
          style={{ objectPosition: imagePosition }}
        />
      )}

      {/* Overlay */}
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
