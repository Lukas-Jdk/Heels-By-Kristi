import React from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/contact.module.css";
import Hero from "../components/Layout/Hero";
import Contacts from "../components/Contacts/Contacts";

const Contact  = () => {
  return (
    <Layout>
      <Hero
        title="Contact Us"
        imageSrc="/media/contacts.jpg"
        imagePosition="center 70%"
        priority
        subtitle="You can reach us via the contact form, e-mail or the telephone number 
        provided on our website. We look forward to hearing from you soon."
      />
      <div className={styles.container}>
        <Contacts />
      </div>
    </Layout>
  );
};

export default Contact ;
