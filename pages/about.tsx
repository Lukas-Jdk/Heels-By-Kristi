import styles from "../styles/about.module.css";
import Hero from "../components/Layout/Hero";
import PersonProfile from "../components/AboutUs/PersonProfile";
import Contacts from "../components/Contacts/Contacts";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <Hero
        imageSrc="/media/20LR.jpg"
        imagePosition="center 30%"
        title="About Heels By Kristi"
        priority
        subtitle="Heels by Kristi studio is a high heels dance studio based in
       Oslo. Heels by Kristi was born in Norway in 2019 and has had more than
        200 talented students. You will find this studio full of love, 
        support and respect for each other."
      />

      <div className={styles.container}>
        <PersonProfile
          name="Kristina"
          description={`Hi! I am a professional dancer, choreographer and “Heels by Kristi” founder. Dance has been my only passion all my life and I am so lucky to share my knowledge with my students for more than 10 years. My choreographies are characterized by exceptional musicality, strong emotional expression, and attention to each dancer's self-expression. Kristina pays great attention to technique and its development.`}
          imageUrl="/media/3LR.jpg"
          reverse={false}
          education="Vilnius College Dance pedagogy degree"
          profDev="Yanis Marshall, Cisco Ruelas, Cris Clark, Sharon June, Tink McClay and others."
        />
        <PersonProfile
          name="Aiste"
          description={`My biggest passion in life has always been dancing. It has always remained in my life – from being in a girl dance group throughout school years, having a possibility to work as a performer, and now embarking on my journey as a high heels dancer. I couldn’t be more excited to be teaching at Heels by Kristi and have other passionate souls dance with me!`}
          imageUrl="/media/Aistee.jpg"
          reverse={true}
        
          profDev="Malou Linders, Cisco Ruelas, Elisa Bei, Kuba Walica, Sharon June, Blake John Wood and others."
        />

   

        <Contacts />
      </div>
    </Layout>
  );
};

export default About;
