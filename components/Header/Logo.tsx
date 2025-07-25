import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

type LogoProps = {
  variant: "light" | "dark";
  scrolled?: boolean;
};

const Logo: React.FC<LogoProps> = ({ variant, scrolled }) => {
  const src =
    variant === "light" ? "/media/logoWhite.png" : "/media/logoBlack.png";

  return (
    <div  className={`${styles.logo} ${scrolled ? styles.logoSmall : ""}`}>
      <Link href="/">
        <Image
          src={src}
          alt="Heels By Kristi Logo"
          width={180}
          height={120}
          priority
           style={{ objectFit: "cover" }}
        />
      </Link>
    </div>
  );
};

export default Logo;
