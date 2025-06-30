import styles from '../styles/booking.module.css';
import Header from '../components/Header/Header';
import Hero from '../components/Layout/Hero'
import CityCard from '../components/Booking/CityCard';
import {City} from '../components/types/booking';


const cities: City[] = [
  {
    name:"OSLO",
    imageUrl:"/img.jpg",
    options:[
    {label: "Basic Beginner Drop-in", price: 300, stripePriceId: "price_oslo_1"},
    {label: "Intermediate Beginners Drop-in", price: 300, stripePriceId: "price_oslo_2"},
    {label: "5 clips", price: 0, stripePriceId: "price_oslo_3" },
    {label: "10 clips", price: 0, stripePriceId: "price_oslo_4"},
    {label: "15 clips", price: 0, stripePriceId: "price_oslo_5"},
    ],
  },
  {
    name:"DRAMMEN",
    imageUrl:"/img.jpg",
    options:[
      {label: "Basic Beginners Drop-in", price: 270, stripePriceId: "price_drm_1"},
      {label: "5 clips", price: 1210, stripePriceId: "price_drm_2"},
      {label: "10 clips", price: 2290, stripePriceId: "price_drm_3"},
      {label: "15 clips", price: 3250, stripePriceId: "pride_drm_4"}
    ],
  },
];




const BookingPage = () => {
  return( 
  <> 
    <Header />
     <Hero title="Courses From Heels By Kristi" subtitle="Please select the available courses that suit you best." />
    <main className={styles.container}>
      <section className={styles.cards}>
        {cities.map((c) => (
          <CityCard key={c.name} city={c} />
        ))}
      </section>

      <section className={styles.info}>
        <p>Classes must be paid for before the class begins and when purchasing
            drop-in, the purchase receipt must be shown to the teacher before
            the class. Clips cannot be shared and lessons cannot be transferred
            to another person. Classes are non-refundable in the event of force
            majeure – please contact the studio directly.
            </p>
            <p> Drop-in is valid for 14 days. 5 clips are valid for 45 days, 10 clips
            for 95 days, and 15 clips for 145 days from your first class. Each
            clip represents one dance class.
            </p>
      </section>
   
    </main>
  </>
  )
};
export default BookingPage;
