import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

type LogoProps = {
  variant: "light" | "dark";
  scrolled?: boolean;
};

const Logo: React.FC<LogoProps> = ({ variant, scrolled }) => {
  const src = variant === "light" ? "/media/logoWhite.png" : "/media/logoBlack.png";

  return (
    <div className={`${styles.logo} ${scrolled ? styles.logoSmall : ""}`}>
      <Link href="/" aria-label="Heels by Kristi – Home">
        <Image
          src={src}
          alt="Heels by Kristi"
          width={180}               
          height={120}
          priority                   
          sizes="(max-width: 768px) 120px, 180px"  
          quality={85}  
          fetchPriority="high"             
     
        />
      </Link>
    </div>
  );
};

export default Logo;
