import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Layout/Hero";
import styles from '@/styles/success.module.css';

const SuccessPage = () => {
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
