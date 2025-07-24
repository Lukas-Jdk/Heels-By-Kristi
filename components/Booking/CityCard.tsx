import Image from 'next/image';
import { City } from '../types/booking';
import OptionSelect from './OptionSelect';
import styles from './CityCard.module.css';

type Props = { city: City};

const CityCard = ({city}: Props) => (

  <article className={styles.card}>
    <div className={styles.imageWrap}>
      <Image 
      src={city.imageUrl} 
      alt= {city.name} 
      layout="fill" 
      objectFit="cover" 
     
      />
      
    </div>
    <div className={styles.cardBody}>
      <h2 className={styles.title}>{city.name}</h2>
      <OptionSelect options= {city.options} />
    </div>
  </article>
);

export default CityCard;
