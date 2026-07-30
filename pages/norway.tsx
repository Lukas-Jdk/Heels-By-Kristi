import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Layout/Hero";
import ScheduleSection from "@/components/Schedule/ScheduleSection";
import BookingSection from "../components/Booking/BookingSection";
import { City } from "../components/types/booking";
import scheduleStyles from "../styles/schedule.module.css";

const norwayCities: City[] = [
  {
    name: "OSLO",
    imageUrl: "/media/Heels4.jpg",
    imagePosition: "center 30%",
    options: [
      {
        label: "Basic Beginner Drop-in",
        price: 300,
        stripePriceId: "price_1Ro0sOHsJm7V7w1Yy4RZ71bp",
      },
      {
        label: "Zero Level Beginners Drop-in",
        price: 300,
        stripePriceId: "price_1RqxIoHsJm7V7w1YmfTZyNfB",
      },
      {
        label: "Intermediate Beginners Drop-in",
        price: 300,
        stripePriceId: "price_1RqxJoHsJm7V7w1Y0a3DGwlS",
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
        label: "Basic Beginners Drop-in",
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

const NorwayPage = () => {
  return (
    <Layout>
      <Head>
        <title>Norway Classes – Heels by Kristi</title>
        <meta
          name="description"
          content="View the Oslo and Drammen class schedules, prices, and book your Heels by Kristi classes in Norway."
        />
      </Head>

      <Hero
        title="Norway"
        subtitle="View class schedules and book your classes in Oslo and Drammen."
        imageSrc="/media/20LR.jpg"
        imagePosition="center 30%"
        priority
      />

      <main>
       <h1 className={scheduleStyles.sectionTitle}>Schedule</h1>
        <section className={scheduleStyles.container}>
          <ScheduleSection />
        </section>
       <h1 className={scheduleStyles.sectionTitle}>Booking</h1>
        <BookingSection cities={norwayCities} />
      </main>
    </Layout>
  );
};

export default NorwayPage;
