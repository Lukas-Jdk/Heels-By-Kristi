import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialsCard";
import styles from "./Testimonials.module.css";
import { SiPandas } from "react-icons/si";

const testimonials = [
  {
    name: "Juste",
    role: "Student",
    text: `Heels by Kristi is a perfect place to learn how to dance, boost your confidence and meet amazing girls...
    Heels by Kristi is a perfect place to learn how to dance, boost your confidence and meet amazing girls...
    Heels by Kristi is a perfect place to learn how to dance, boost your confidence and meet amazing girls...`,
  },
  {
    name: "Agnija",
    role: "Student",
    text: `I love the choreography, the vibe and the support I get from everyone. Highly recommended!`,
  },
  {
    name: "Yunna",
    role: "Student",
    text: `Heels by Kristi is a perfect place to learn how to dance, boost your confidence and meet amazing girls...`,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.slider}>
      <TestimonialCard {...testimonials[index]} />
      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${index === i ? styles.active : ""} `}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;