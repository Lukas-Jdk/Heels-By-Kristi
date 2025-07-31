import styles from "./AboutUs.module.css";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.aboutUsImage}>
        <Image
          src="/media/30LR.jpg"
          alt="About Us"
          width={600} 
          height={400}
        />
      </div>
      <div className={styles.aboutUsInfo}>
        <h1>About Us</h1>
        <p>
          Heels by Kristi studio is a high heels dance studio based in Oslo and
          Drammen. Heels by Kristi was born in Norway in 2019 and has had more
          than 200 talented students. You will find this studio full of love,
          support and respect for each other. This studio is the ultimate
          destination for those who are passionate about dancing in high heels
          and want to learn from the best in the business.
        </p>
       

        <Link href="/about" className={styles.readMoreButton}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
