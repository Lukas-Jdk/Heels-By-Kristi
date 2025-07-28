import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import MobileMenu from "../Header/MobileMenu";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className={styles.layout}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
