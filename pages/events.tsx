import styles from "../styles/events.module.css";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Layout/Hero";
import InfoSection from "@/components/Events/InfoSection";

const events = () => {
  return (
    <Layout>
      <Hero
        title="Events"
        subtitle="Our dance studio events"
        imageSrc="/media/heels1.jpg"
        imagePosition="center"
      />

      <div className={styles.eventsCointainer}>
        <InfoSection
          title="Bachelorette party"
          image="/media/heels2.jpg"
          imagePosition="left"
          text={
            <>
              <p>
                High Heels class is the perfect way to celebrate your special
                day! Heels by Kristi teachers will teach you speacial
                choregraphy which can be performed by all Bride team. Bride will
                be get special attention during the dance class and routine. You
                will start with small warm up, later all participants will learn
                not diffiucult and sexy choreography which you will perform in
                the end of the class. You will have possibility to record you
                class and take time for photos.
              </p>

              <p className={styles.prices}>
                <strong>Prices:</strong>
                <br />
                <strong>3500 NOK</strong> – 75 min, 10 participants or less
                <br />
                <strong>4000 NOK</strong> – 75 min, 11 -20 participants
                <br />
                <strong>5000 NOK</strong> – 90 min, 21 participants or more
                <br />
              </p>
            </>
          }
        />

        <InfoSection
          title="Private class"
          image="/media/heels2.jpg"
          imagePosition="right"
          text={
            <>
              <p>
                Private class is special class for 1-4 people. In this class you
                will get all teachers attention and full support. During this
                class you will have possibility to upgrade your techniqual
                skills, find your own dance style, will have time to ask and get
                into all details. Also you will be free to choose choreo from
                Heels by Kristi portfolio
              </p>
              <p className={styles.prices}>
                <strong>Prices:</strong>
                <br />
                <strong>1000 NOK</strong> – 60 min, 1 participant
                <br />
                <strong>900 NOK</strong> – 60 min, 2 participants
                <br />
                <strong>800 NOK</strong> – 60 min , 3/4 participants
                <br />
              </p>
            </>
          }
        />
        <InfoSection
          title="Girls Time dance class"
          image="/media/heels2.jpg"
          imagePosition="left"
          text={
            <>
              <p>
                Special Heels dance class is perfect time to bond! You can
                celebrate any occation with your girls. Birthday party, team
                building, girls night out – make it special! You will start with
                small warm up, later all participants will learn not difficult
                and sexy choreography which you will perform in the end of the
                class. You will have possibility to record you class and take
                time for photos
              </p>

              <p className={styles.prices}>
                <strong>Prices:</strong>
                <br />
                <strong>3500 NOK</strong> – 75 min, 10 participants or less
                <br />
                <strong>4000 NOK</strong> – 75 min, 11 -20 participants
                <br />
                <strong>5000 NOK</strong> – 90 min, 21 participants or more
                <br />
              </p>
            </>
          }
        />
      </div>
    </Layout>
  );
};

export default events;
