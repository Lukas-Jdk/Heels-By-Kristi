import styles from "../styles/schedule.module.css";
import Hero from "../components/Layout/Hero";
import ClassDescription from "../components/Schedule/ClassDescription";
import Layout from "../components/Layout/Layout";
import ProgramsDescription from "../components/Testimonials/ProgramsDescription";

const OurClassesPage = () => {
  return (
    <Layout>
      <Hero
        title="Our Classes"
        imageSrc="/media/20LR.jpg"
        imagePosition="center 30%"
        priority
        subtitle="Discover the Heels by Kristi class that suits your experience and goals."
      />

      <div className={styles.container}>
        <div className={styles.ourClassItem}>
          <ClassDescription
            id="zero-level-beginners"
            title="Zero Level Beginners"
            description="Perfect for first-timers and experienced dancers alike, this class focuses on the foundational techniques of heels dance. We’ll break down posture, walks, balance, and movement quality to build confidence and control. Whether you’re just starting out or refining your skills, this class is essential for mastering the basics and building a strong technical foundation."
            showFooter={false}
            bubblesByTitle
          />
        </div>

        <div className={styles.ourClassItem}>
          <ClassDescription
            id="open-level"
            title="Open Level"
              align="right"
            description="Open Level means everyone is welcome. This class is suitable for anyone who has danced before, whether in heels or another dance style, and is comfortable learning choreography. You’ll improve your posture, balance, turns, and technique while learning dynamic choreography, creative styling, and floor work to build confidence and control."
            showFooter={false}
            bubblesByTitle
          />
        </div>

        <div className={styles.testimonialCard}>
          <ProgramsDescription subtitle="Heels by Kristi offers exclusive dance training for women aged 16 and older. With a strong focus on quality, confidence, and the development of dance skills, this is the perfect place for women who want to grow as dancers." />
        </div>
      </div>
    </Layout>
  );
};

export default OurClassesPage;