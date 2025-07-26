import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Sklandus meniu uždarymas (uždelsimas, kad `transform` spėtų suveikti)
  const handleCloseMenu = () => {
    setTimeout(() => setMenuOpen(false), 300); // 300ms = transition trukmė
  };

  return (
    <div className={styles.layout}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Pagrindinis turinys stumdomas kai meniu atidarytas */}
      <main className={`${styles.content} ${menuOpen ? styles.shifted : ""}`}>
        {children}
      </main>

      {/* Meniu rodomas jei menuOpen = true */}
      {menuOpen && (
        <div className={styles.mobileOverlay}>
          <Header menuOpen={menuOpen} setMenuOpen={handleCloseMenu} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Layout;

