import Link from 'next/link';
import Image from 'next/image'
import styles from './Logo.module.css';

const Logo = () => {
return(
  <div className={styles.logo}>
    <Link href="/">
      <Image
      src ='/media/logo/logo1.png'
      alt = 'Heels By Kristi Logo'
      width={200}
      height={200}
      />
   
    </Link>
  </div>
)
}

export default Logo;