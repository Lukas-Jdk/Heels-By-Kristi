import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Layout/Hero";
import styles from "@/styles/cancel.module.css";
import Link from "next/link";

const CancelPage = () => {
  return (
    <Layout>
      <Hero title="" height="small" priority/>
      <div className={styles.cancelWrapper}>
        <h1>Payment was cancelled </h1>
        <p>You can try again at any time.</p>
        <div>
          <Link href="/booking" className={styles.tryAgainBtn}>TRY AGAIN</Link>
        </div>
      </div>
    </Layout>
  );
};

export default CancelPage;
