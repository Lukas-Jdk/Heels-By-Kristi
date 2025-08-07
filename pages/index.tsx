import Head from "next/head";
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
      <Head>
        <title>Heels by Kristi – Confident & Feminine Dance Classes</title>
        <meta
          name="description"
          content="Express yourself through dance. Join Heels by Kristi in Oslo or Drammen for stylish, empowering heels dance classes. See schedule & book online."
        />
        <meta property="og:title" content="Heels by Kristi – Heels Dance Classes" />
        <meta
          property="og:description"
          content="Heels dance for all levels – feel strong, elegant, and confident. Oslo & Drammen."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://heelsbykristi.no" />
        <meta property="og:image" content="/media/logoBW.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero
        title=""
        videoSrc="/media/Video.mp4"
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
