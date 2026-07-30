// src/components/Schedule/ClassDescription.tsx
import Link from "next/link";
import clsx from "classnames";

import styles from "./ClassDescription.module.css";
import Bubbles from "../Bubbles/Bubbles";
import InstructorInfo from "./InstructorInfo";

type Props = {
  id: string;
  title: string;
  description: string;
  instructor?: string;
  align?: "left" | "right";
  showFooter?: boolean;
  bubblesByTitle?: boolean;
};

const ClassDescription = ({
  id,
  title,
  description,
  instructor,
  align,
  showFooter = true,
  bubblesByTitle = false,
}: Props) => {
  return (
    <section
      id={id}
      className={clsx(styles.block, align === "right" && styles.right)}
    >
      {!bubblesByTitle && <Bubbles align={align} />}

      <div className={styles.basicAndInter}>
        <div className={styles.titleWrapper}>
          {bubblesByTitle && <Bubbles titleOverlap />}

          <h2 className={styles.title}>{title}</h2>
        </div>

        <p className={styles.description}>{description}</p>
      </div>

      {showFooter && (
        <div className={styles.footer}>
          <Link href="/booking" className={styles.price}>
            PRICE
          </Link>

          {instructor && (
            <InstructorInfo
              name={instructor}
              details="Further professional development: Yanis Marshall, Cisco Ruelas, Cris Clark, Sharon Pakir."
            />
          )}
        </div>
      )}
    </section>
  );
};

export default ClassDescription;