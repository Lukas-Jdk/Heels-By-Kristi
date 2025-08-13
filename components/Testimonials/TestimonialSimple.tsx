import { useEffect, useState } from "react";
import TestimonialPreviewCard from "./TestimonialPreviewCard";
import { testimonials } from "@/data/testimonials";
import styles from "./TestimonialSimple.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const TestimonialsSimple = () => {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goLeft = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goRight = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className={styles.wrapper}>
      <button 
      onClick={goLeft} 
      className={styles.arrow}
      aria-label="Previous testimonial"
      >
        <ChevronLeft size={5} />
      </button>

      <div className={styles.slider}>
        <TestimonialPreviewCard {...testimonials[index]} />
      </div>

      <button 
      onClick={goRight} 
      className={styles.arrow}
      aria-label="Next testimonial"
      >
        <ChevronRight size={5} />
      </button>
    </div>
  );
};

export default TestimonialsSimple;
