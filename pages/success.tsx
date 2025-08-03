import Layout from "@/components/Layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Hero from "@/components/Layout/Hero";
import styles from '@/styles/success.module.css';

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    const sessionId = router.query.session_id;
    console.log("Stripe session ID:", sessionId);
  }, [router.query]);

  return (
    <Layout>
      <Hero 
      title=""
      height="small"
      priority
      />
      <div className={styles.successWrapper}>
        <h1>Thank you for your purchase! </h1>
        <p>You’ll receive a confirmation email shortly.</p>
        <p>If you have questions, contact us directly.</p>
      </div>
    </Layout>
  );
};

export default SuccessPage;
