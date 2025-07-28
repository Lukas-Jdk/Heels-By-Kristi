import styles from "../styles/index.module.css";
import Hero from "../components/Layout/Hero";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import ClassSection from "../components/ClassCardSection/ClassSection";
import Layout from "../components/Layout/Layout";
import AboutUs from "@/components/AboutUs/AboutUs";
import EnrrollElementBlock from "@/components/EnrollElementBlock/EnrollElementBlock";
import ZeroLevel from "@/components/ZeroLevel/ZeroLevel";

const HomePage = () => {
  return (
    <Layout>
      <Hero
        title=""
        videoSrc="/media/video.mp4"
        height="full"
        priority
        overlay={false}
      />
      <div className={styles.container}>
        <ButtonGroup />
        <ClassSection />
        <AboutUs />
      </div>
      <EnrrollElementBlock />
      <ZeroLevel />
    </Layout>
  );
};

export default HomePage;
