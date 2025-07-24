import React from "react";
import Link from "next/link";
import styles from "./EnrollBtn.module.css";

const EnrollBtn = () => {
  return (
    <div className={styles.btnWrapper}>
      <Link className={styles.enrollBtn} href="/booking">
        Buy Now
      </Link>
    </div>
  );
};

export default EnrollBtn;
