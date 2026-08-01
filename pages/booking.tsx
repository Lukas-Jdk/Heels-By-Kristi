import styles from "../styles/booking.module.css";
import Hero from "../components/Layout/Hero";
import CityCard from "../components/Booking/CityCard";
import { City } from "../components/types/booking";
import Layout from "../components/Layout/Layout";

const cities: City[] = [
  {
    name: "OSLO",
    imageUrl: "/media/Heels4.jpg",
    imagePosition: "center 30%",
    options: [
      {
        label: "Zero Level Beginners  Drop-in",
        price: 300,
        stripePriceId: "price_1RqxIoHsJm7V7w1YmfTZyNfB",
      },
      {
        label: "2 clips",
        price: 580,
        stripePriceId: "price_1RqxKZHsJm7V7w1YTd3g3r5k",
      },
      {
        label: "5 clips",
        price: 1350,
        stripePriceId: "price_1RqxLVHsJm7V7w1YfSFj6zEv",
      },
      {
        label: "10 clips",
        price: 2600,
        stripePriceId: "price_1RqxNFHsJm7V7w1YVaPFKDmp",
      },
      {
        label: "15 clips",
        price: 3650,
        stripePriceId: "price_1RqxOUHsJm7V7w1YC1uxaPvj",
      },
    ],
  },
  {
    name: "DRAMMEN",
    imageUrl: "/media/aiste2.jpg",
    options: [
      {
        label: "Zero Level Beginners Drop-in",
        price: 270,
        stripePriceId: "price_1RqxPNHsJm7V7w1Y1S9ejKVG",
      },
      {
        label: "2 clips",
        price: 520,
        stripePriceId: "price_1SD0cbHsJm7V7w1YGcARHezC",
      },
      {
        label: "5 clips",
        price: 1210,
        stripePriceId: "price_1RqxReHsJm7V7w1YpfpKX55Q",
      },
      {
        label: "10 clips",
        price: 2290,
        stripePriceId: "price_1RqxSTHsJm7V7w1Y0kIC3maa",
      },
      {
        label: "15 clips",
        price: 3250,
        stripePriceId: "price_1RqxT1HsJm7V7w1YbVraaLbm",
      },
    ],
  },
];

const BookingPage = () => {
  return (
    <Layout>
      <Hero
        title="Courses From Heels By Kristi"
        subtitle="Please select the available courses that suit you best."
        imageSrc="/media/20LR.jpg"
        imagePosition="center 30%"
        quality={100}
        priority
      />

      <main className={styles.container}>
        <section className={styles.cards}>
          {cities.map((c) => (
            <CityCard key={c.name} city={c} />
          ))}
        </section>

        <section className={styles.info}>
          <p>1 clip = 1 class</p>

          <p>
            Classes must be paid for before the class begins. When purchasing a
            drop-in class, the purchase receipt must be shown to the teacher
            before the class.
          </p>

          <p>
            Clips cannot be shared, and classes cannot be transferred to another
            person. Classes are non-refundable in the event of force majeure –
            please contact the studio directly.
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
        </section>
      </main>
    </Layout>
  );
};
export default BookingPage;
