import Head from "next/head";
import styles from "../styles/index.module.css";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Layout/Hero";
import dynamic from "next/dynamic";

const ButtonGroup        = dynamic(() => import("../components/ButtonGroup/ButtonGroup"), { ssr:false });
const ClassSection       = dynamic(() => import("../components/ClassCardSection/ClassSection"), { ssr:false });
const AboutUs            = dynamic(() => import("@/components/AboutUs/AboutUs"), { ssr:false });
const EnrrollElementBlock= dynamic(() => import("@/components/EnrollElementBlock/EnrollElementBlock"), { ssr:false });
const ZeroLevel          = dynamic(() => import("@/components/ZeroLevel/ZeroLevel"), { ssr:false });

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
