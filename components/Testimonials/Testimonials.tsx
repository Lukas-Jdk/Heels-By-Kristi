import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialsCard";
import styles from "./Testimonials.module.css";
import { testimonials } from "@/data/testimonials";

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
