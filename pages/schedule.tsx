import styles from "../styles/schedule.module.css";
import ScheduleSection from "@/components/Schedule/ScheduleSection";
import Hero from "../components/Layout/Hero";
import ClassDescription from "../components/Schedule/ClassDescription";
import Testimonials from "@/components/Testimonials/Testimonials";
import Layout from "../components/Layout/Layout";
import ProgramsDescription from "@/components/Testimonials/ProgramsDescription";

const SchedulePage = () => {
  return (
    <Layout>
      <Hero
        title="Schedule"
        imageSrc="/media/20LR.jpg"
        imagePosition="center 20%"
        priority
        subtitle="Create a memorable experience with our dance program, led by the talented Heels by Kristi."
      />
      <div className={styles.container}>
        <ScheduleSection />
        <ClassDescription
          id="basic-beginners-description"
          align="right"
          title="Basic Beginners"
          description="This class is perfect for those who never danced with High Heels but always dreamed about it! During the class you will learn everything about posture, balance and turns in Heels. In every class you will challenge yourself by learning small choreography and of course we will not forget floor work."
          instructor="Kristina, Aiste"
        />
        <ClassDescription
          id="intermediate-beginners-description"
          title="Intermediate Beginners"
          description="This class is designed for those who have some experience dancing in heels but want to take their skills to the next level! You’ll refine your posture, balance, and turns while learning more advanced techniques. Each class will challenge you with new choreography that incorporates dynamic movements and creative styling. Plus, we’ll continue to work on floor work, helping you build confidence and precision in every step."
          instructor="Kristina"
        />
        <ClassDescription
          id="basic-beginners-description"
          align="right"
          title="Zero Level Beginners"
          description="Perfect for first-timers and experienced dancers alike, this class focuses on the foundational techniques of heels dance. We’ll break down posture, walks, balance, and movement quality to build confidence and control. Whether you’re just starting out or refining your skills, this class is essential for mastering the basics and building a strong technical base."
          instructor="Kristina, Aiste"
        />
         <div className={styles.testimonialCard}>
          <Testimonials />
          <ProgramsDescription 
          subtitle="The dance studio Heels by Kristi offers exclusive dance training only for women aged 18 or older. With a focus on quality and development of dance skills, this is the perfect place for women who want to develop as dancers."
          extraText="You can get to know the girls in our section close. For our home to live, we need each and every one of you. With his attitude, energy and love of dance. Join our community."
          />
        </div>
      </div>
    </Layout>
  );
};
export default SchedulePage;
