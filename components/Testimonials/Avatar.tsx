import Image from "next/image";
import styles from "./Avatar.module.css";

type Props = {
  src?: string;
  alt?: string;
  size?: "small" | "large";
};

const Avatar = ({
  src = "/media/avatar1.png",
  alt = "User avatar",
  size = "large",
}: Props) => {
  return (
    <div className={`${styles.avatar} ${styles[size]}`}>
      <Image src={src} alt={alt} fill className={styles.image} />
    </div>
  );
};

export default Avatar;
