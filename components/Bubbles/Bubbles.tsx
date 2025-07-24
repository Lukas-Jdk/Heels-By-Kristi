import styles from "./Bubbles.module.css";
import clsx from "classnames";

type Props = {
  align?: "left" | "right";
};

const Bubbles = ({ align = "left" }: Props) => {
  return (
    <section>
      <div
        className={clsx(styles.circle, align === "right" && styles.circleRight)}
      />
      <div
        className={clsx(
          styles.circleSmall,
          align === "right" ? styles.circleSmallRight : styles.circleSmallLeft
        )}
      ></div>
    </section>
  );
};

export default Bubbles;
