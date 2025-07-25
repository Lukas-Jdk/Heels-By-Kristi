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
        stripePriceId: "price_1Ro1VZHsJm7V7w1Y9mDtU5pu",
      },
      {
        label: "Zero Level Beginners  Drop-in",
        price: 300,
        stripePriceId: "price_oslo_zero",
      },
      {
        label: "Intermediate Beginners Drop-in",
        price: 300,
        stripePriceId: "price_oslo_inter",
      },
        {
        label: "Try-Out Pack 2 clips",
        price: 580,
        stripePriceId: "price_oslo_tryout",
      },

      { label: "Starter Pack 5 clips", price: 1350, stripePriceId: "price_oslo_starter" },
      { label: "Mover Pack 10 clips", price: 2600, stripePriceId: "price_oslo_mover" },
      { label: "Pro Pack 15 clips", price: 3650, stripePriceId: "price_oslo_pro" },
    ],
  },
  {
    name: "DRAMMEN",
    imageUrl: "/media/Heels8.jpg",
    options: [
      {
        label: "Basic Beginners Drop-in",
        price: 270,
        stripePriceId: "price_drm_basic",
      },
      { label: "Starter Pack 5 clips", price: 1210, stripePriceId: "price_drm_starter" },
      { label: "Mover Pack 10 clips", price: 2290, stripePriceId: "price_drm_mover" },
      { label: "Pro Pack 15  clips", price: 3250, stripePriceId: "price_drm_pro" },
    ],
  },
];

const BookingPage = () => {
  return (
    <Layout>
      <Hero
        title="Courses From Heels By Kristi"
        subtitle="Please select the available courses that suit you best."
        imageSrc="/media/Heels.jpg"
        imagePosition="center"
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
