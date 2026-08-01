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
    imageUrl: "/media/kristina1.jpeg",
    imagePosition: "center 30%",
    options: [
      {
        label: "Open Level Drop-in",
        price: 20,
        currency: "€",
        stripePriceId: "price_1TzfavHsJm7V7w1YjgokDKPc",
      },
      {
        label: "5 clips",
        price: 95,
        currency: "€",
        stripePriceId: "price_1TzfcPHsJm7V7w1YIetoVDxB",
      },
      {
        label: "10 clips",
        price: 179,
        currency: "€",
        stripePriceId: "price_1Tzfd4HsJm7V7w1YHtyuliA4",
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
              5 clips: valid for 45 days
              <br />
              10 clips: valid for 95 days
            </p>

            <p>Each clip represents one dance class!</p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default LithuaniaPage;