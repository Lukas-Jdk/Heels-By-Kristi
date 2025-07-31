import styles from "../styles/booking.module.css";
import Hero from "../components/Layout/Hero";
import CityCard from "../components/Booking/CityCard";
import { City } from "../components/types/booking";
import Layout from "../components/Layout/Layout";

const cities: City[] = [
  {
    name: "OSLO",
    imageUrl: "/media/Heels8.jpg",
    options: [
      {
        label: "Basic Beginner Drop-in",
        price: 300,
        stripePriceId: "price_1Ro0sOHsJm7V7w1Yy4RZ71bp",
      },
      {
        label: "Zero Level Beginners  Drop-in",
        price: 300,
        stripePriceId: "price_1RqxIoHsJm7V7w1YmfTZyNfB",
      },
      {
        label: "Intermediate Beginners Drop-in",
        price: 300,
        stripePriceId: "price_1RqxJoHsJm7V7w1Y0a3DGwlS",
      },

      { label: "2 clips", price: 580, stripePriceId: "price_1RqxKZHsJm7V7w1YTd3g3r5k"},
      { label: "5 clips", price: 1350, stripePriceId: "price_1RqxLVHsJm7V7w1YfSFj6zEv"},
      { label: "10 clips", price: 2600, stripePriceId: "price_1RqxNFHsJm7V7w1YVaPFKDmp" },
      { label: "15 clips", price: 3650, stripePriceId: "price_1RqxOUHsJm7V7w1YC1uxaPvj" },
    ],
  },
  {
    name: "DRAMMEN",
    imageUrl: "/media/Heels8.jpg",
    options: [
      {
        label: "Basic Beginners Drop-in",
        price: 270,
        stripePriceId: "price_1RqxPNHsJm7V7w1Y1S9ejKVG",
      },
      { label: "2 clips", price: 580, stripePriceId: "price_1RqxQ3HsJm7V7w1YvYUpuVE2",},
      { label: "5 clips", price: 1210, stripePriceId: "price_1RqxReHsJm7V7w1YpfpKX55Q" },
      { label: "10 clips", price: 2290, stripePriceId: "price_1RqxSTHsJm7V7w1Y0kIC3maa" },
      { label: "15 clips", price: 3250, stripePriceId: "price_1RqxT1HsJm7V7w1YbVraaLbm" },
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
            Classes must be paid for before the class begins and when purchasing
            drop-in, the purchase receipt must be shown to the teacher before
            the class. Clips cannot be shared and lessons cannot be transferred
            to another person. Classes are non-refundable in the event of force
            majeure – please contact the studio directly.
          </p>
          <p>
            {" "}
            Drop-in is valid for 14 days. 5 clips are valid for 45 days, 10
            clips for 95 days, and 15 clips for 145 days from your first class.
            Each clip represents one dance class.
          </p>
        </section>
      </main>
    </Layout>
  );
};
export default BookingPage;
