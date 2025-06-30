import styles from "./ClassDescription.module.css";
import clsx from "classnames";
import InstructorInfo from "./InstructorInfo";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  align?: "left" | "right";
};

const ClassDescription = ({
  id,
  title,
  description,
  instructor,
  align = "left",
}: Props) => {
  return (
    <section
      id={id}
      className={clsx(styles.block, align === "right" && styles.right)}
    >
      <div
        className={clsx(styles.circle, align === "right" && styles.circleRight)}
      />
      <div
        className={clsx(
          styles.circleSmall,
          align === "right" ? styles.circleSmallRight : styles.circleSmallLeft
        )}
      ></div>
      <div className={styles.basicAndInter}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footer}>
        <Link href="/booking" className={styles.price}>
        PRICE
        </Link>
        <InstructorInfo
          name={instructor}
          details="Further professional development: Yanis Marshall, Cisco Ruelas, Cris Clark, Sharon June, Tink McClay and others."
        />
      </div>
    </section>
  );
};

export default ClassDescription;
