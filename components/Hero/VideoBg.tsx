import styles from './VideoBg.module.css';

const VideoBg = () => (
  <video className={styles.video} autoPlay muted loop playsInline>
    <source src='' type = "video/mp4" />
    Your browser does not support the video tag.
  </video>
);
export default VideoBg ;