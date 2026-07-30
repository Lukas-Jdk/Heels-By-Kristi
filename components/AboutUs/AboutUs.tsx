import styles from "./AboutUs.module.css";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.aboutUsImage}>
        <Image src="/media/30LR.jpg" alt="About Us" width={600} height={400} />
      </div>
      <div className={styles.aboutUsInfo}>
        <h1>About Us</h1>
        <p>
          Heels by Kristi Studio is a high heels dance studio with locations in
          Oslo, Drammen, and Vilnius. Founded in Norway in 2019, our studio has
          welcomed over 200 students and continues to grow. We are proud to have
          recently expanded to Vilnius, Lithuania. At Heels by Kristi, we create
          a supportive community built on love, respect, and confidence. Through
          regular workshops, international guest instructors, and inspiring
          projects, we help our dancers grow both on and off the dance floor.
          Welcome to the Heels by Kristi family!
        </p>

        <Link
          href="/about"
          className={styles.readMoreButton}
          aria-label="Read more about Heels By Kristi"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
