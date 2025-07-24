import styles from "./HomeTestimonial.module.css";
import Unicode from "@/components/Symbols/Unicode";

import TestimonialsSimple from "./TestimonialSimple";

const HomeTestimonial = () => {
  return (
    <div className={styles.homeTestimonial}>
      <div className={styles.container}>
        <Unicode />
        <TestimonialsSimple />
      </div>
    </div>
  );
};

export default HomeTestimonial;
