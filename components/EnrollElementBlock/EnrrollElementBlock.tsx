import styles from "./EnrollElementBlock.module.css";
import EnrollMiddle from "./EnrollMiddle";
import EnrollBtn from "./EnrollBtn";
import EnrollTop from "./EnrollTop";
import HomeTestimonial from "../Testimonials/HomeTestimonial";
const EnrrollElementBlock = () => {
  return (
    <div className={styles.enrollWrapper}>
      <div className={styles.container}>
        <HomeTestimonial />
        <div className={styles.rightBlock}>
          <EnrollTop />
          <EnrollMiddle />
          <div className={styles.buttonWrapper}>
            <EnrollBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrrollElementBlock;
