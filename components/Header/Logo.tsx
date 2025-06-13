import Link from 'next/link';
import styles from './Logo.module.css';

const Logo = () => {
return(
  <div className={styles.logo}>
    <Link href="/">Heels By Kristi</Link>
  </div>
)
}

export default Logo;