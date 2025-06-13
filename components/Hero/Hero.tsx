import styles from "./Hero.module.css";
import VideoBg from './VideoBg';
import Overlay from "./Overlay";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <VideoBg />
      <Overlay/>
    </section>
  );
};

export default Hero;
