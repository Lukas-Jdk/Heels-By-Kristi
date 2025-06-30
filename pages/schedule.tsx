import styles from "../styles/schedule.module.css";
import ScheduleSection from "@/components/Schedule/ScheduleSection";
import Header from "../components/Header/Header";
import Hero from "../components/Layout/Hero";
import ClassDescription from "../components/Schedule/ClassDescription";
import Testimonials from '@/components/Testimonials/Testimonials';

const SchedulePage = () => {
  return (
    <>
      <Header />
      <Hero
        title="Schedule"
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
          <Testimonials />
      </div>
    
    </>
  );
};
export default SchedulePage;
