import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Layout/Hero";
import styles from '@/styles/policy.module.css'

export default function PolicyPage() {
  return (
    <Layout>
         <Hero
        title="Studio Policy"
        imageSrc="/media/contacts.jpg"
        imagePosition="center 70%"
        height="medium"
        priority
      />
       <Head>
        <title>Studio Policy | Heels by Kristi</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Heels by Kristi – Studio Policy</h1>
        <p className={styles.effectiveDate}>Effective Date: 2025-08-01</p>

        <section className={styles.section}>
          <h2>1. General Code of Conduct</h2>
          <ul>
            <li>Respect for instructors and fellow students is required at all times.</li>
            <li>We maintain a body-positive, inclusive space. Discrimination, harassment, or inappropriate behavior will not be tolerated.</li>
            <li>Filming or photographing others without their consent is not allowed.</li>
            <li>Come with a positive attitude, ready to move, learn, and support one another.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. Payment & Registration</h2>
          <ul>
            <li>All classes must be paid for before the class begins.</li>
            <li>Show the payment receipt to the instructor before entering class.</li>
            <li>Clips cannot be shared or transferred.</li>
            <li>Classes are non-refundable, including in force majeure cases.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Class Credit Validity (Clips)</h2>
          <ul>
            <li>Drop-in credits are valid for 14 days from the date of purchase.</li>
            <li>5 clips are valid for 45 days from the date of your first class.</li>
            <li>10 clips are valid for 95 days, and 15 clips are valid for 145 days, starting from your first class.</li>
            <li>Each clip represents one dance class.</li>
            <li>You may combine clips and attend classes at your convenience within the validity period.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Cancellations & No-Shows</h2>
          <ul>
            <li>Cancellations must be made at least 12–24 hours before class.</li>
            <li>Private classes require 48-hour notice for rescheduling or refund.</li>
            <li>We use the Spond app to manage attendance. Students must click “Attend” in the app to confirm their spot in class.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Late Arrival Policy</h2>
          <ul>
            <li>Please arrive 5–10 minutes early to allow time to warm up and settle in.</li>
            <li>Students arriving more than 10 minutes late may not be allowed to participate, for safety reasons.</li>
            <li>No refunds or credits will be issued for late arrivals.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Attire & Footwear</h2>
          <ul>
            <li>Wear comfortable clothing that allows free movement.</li>
            <li>Clean, indoor-only heels are required. Heel protectors may be required depending on the studio floor.</li>
            <li>Some classes may allow sneakers or barefoot dancing—check the class description.</li>
          </ul>
        </section>

             <section className={styles.section}>
          <h2>7. Video Recording & Copyright</h2>
          <ul>
            <li>Occasionally, the studio may film choreography or performances.</li>
            <li>You are not permitted to use these videos for commercial purposes, self-promotion, advertising, or boosting (e.g., sponsored posts).</li>
            <li>All recorded content is the intellectual property of Heels by Kristi and may not be edited or redistributed without written permission.</li>
            <li>By participating, you agree to this media usage policy. Please inform the instructor if you do not wish to appear in any public content.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Studio Environment</h2>
          <ul>
            <li>No outdoor shoes are allowed in the dance space.</li>
            <li>Please bring your own water bottle and towel.</li>
            <li>Inform your instructor of any injuries or health concerns before class begins.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>9. Age Restrictions</h2>
          <ul>
            <li>Most classes are for ages 18+. Some may allow dancers 16+ with written consent. Please check specific class details.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>10. Contact</h2>
          <strong><p>For any questions or concerns, reach out to us at:</p></strong>
          <p><a href="mailto:heelsbykristi@gmail.com" className={styles.link}> heelsbykristi@gmail.com</a></p>
          <p>📞 41275229</p>
          <p>🌐 www.heelsbykristi.no</p>
        </section>

      </main>
      
    </Layout>
  );
}
