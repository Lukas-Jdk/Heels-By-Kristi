import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Layout/Hero";
import ScheduleCity from "../components/Schedule/ScheduleCity";
import CityCard from "../components/Booking/CityCard";
import { City } from "../components/types/booking";

import bookingStyles from "../styles/booking.module.css";

const vilniusSchedule = [
  {
    day: "MONDAYS",
    level: "Open Level",
    time: "19.45 - 21.15",
    teacher: "Kristina",
  },
];

const lithuaniaCities: City[] = [
  {
    name: "VILNIUS",
    imageUrl: "/media/Heels4.jpg",
    imagePosition: "center 30%",
    options: [
      {
        label: "Basic Beginner Drop-in",
        price: 300,
        stripePriceId: "price_placeholder_1",
      },
      {
        label: "Zero Level Beginners Drop-in",
        price: 300,
        stripePriceId: "price_placeholder_2",
      },
      {
        label: "Intermediate Beginners Drop-in",
        price: 300,
        stripePriceId: "price_placeholder_3",
      },
      {
        label: "2 clips",
        price: 580,
        stripePriceId: "price_placeholder_4",
      },
      {
        label: "5 clips",
        price: 1350,
        stripePriceId: "price_placeholder_5",
      },
      {
        label: "10 clips",
        price: 2600,
        stripePriceId: "price_placeholder_6",
      },
      {
        label: "15 clips",
        price: 3650,
        stripePriceId: "price_placeholder_7",
      },
    ],
  },
];

const LithuaniaPage = () => {
  return (
    <Layout>
      <Head>
        <title>Lithuania Classes – Heels by Kristi</title>

        <meta
          name="description"
          content="View the class schedule, prices, and book your Heels by Kristi classes in Vilnius, Lithuania."
        />
      </Head>

      <Hero
        title="Lithuania"
        subtitle="View class schedules and book your classes in Vilnius."
        imageSrc="/media/20LR.jpg"
        imagePosition="center 30%"
        priority
      />

      <main>
        <section className={bookingStyles.lithuaniaGrid}>
          <div className={bookingStyles.scheduleColumn}>
            <ScheduleCity
              city="Vilnius"
              schedule={vilniusSchedule}
              imageUrl="/media/Heels4.jpg"
              imagePosition="center 45%"
            />
          </div>

          <div className={bookingStyles.bookingColumn}>
            <div className={bookingStyles.lithuaniaCards}>
              {lithuaniaCities.map((city) => (
                <CityCard key={city.name} city={city} />
              ))}
            </div>
          </div>

          <div className={bookingStyles.lithuaniaInfo}>
            <p>1 clip = 1 class</p>

            <p>
              Classes must be paid for before the class begins. When purchasing
              a drop-in class, the purchase receipt must be shown to the teacher
              before the class.
            </p>

            <p>
              Clips cannot be shared, and classes cannot be transferred to
              another person. Classes are non-refundable in the event of force
              majeure – please contact the studio directly.
            </p>

            <p>Validity is calculated from the date of purchase:</p>

            <p>
              Drop-in (1 class): valid for 14 days
              <br />
              2 clips: valid for 21 days
              <br />
              5 clips: valid for 45 days
              <br />
              10 clips: valid for 95 days
              <br />
              15 clips: valid for 145 days
            </p>

            <p>Each clip represents one dance class!</p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default LithuaniaPage;