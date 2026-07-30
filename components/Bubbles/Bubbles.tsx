import clsx from "classnames";
import styles from "./Bubbles.module.css";

type Props = {
  align?: "left" | "right";
  titleOverlap?: boolean;
};

const Bubbles = ({
  align = "left",
  titleOverlap = false,
}: Props) => {
  return (
    <div
      className={clsx(
        titleOverlap && styles.titleWrapper
      )}
      aria-hidden="true"
    >
      <div
        className={clsx(
          styles.circle,
          align === "right" && !titleOverlap && styles.circleRight,
          titleOverlap && styles.titleCircle
        )}
      />

      <div
        className={clsx(
          styles.circleSmall,
          !titleOverlap &&
            (align === "right"
              ? styles.circleSmallRight
              : styles.circleSmallLeft),
          titleOverlap && styles.titleCircleSmall
        )}
      />
    </div>
  );
};

export default Bubbles;