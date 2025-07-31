import styles from './ClassSection.module.css';
import ClassCard from './ClassCard';

const ClassSection = () => {
  return(
    <section className={styles.wrapper}>
      <ClassCard 
      title= "Basic Beginners"
      text= "This class is perfect for those who never danced with High Heels but always dreamed about it! During the class you will learn everything about posture, balance and turns in Heels."
      link= "/schedule#basic-beginners-description"
      
      />

      <ClassCard 
      title= "Intermediate Beginners"
      text= "This class is suitable for someone who has some dance experience. In this class you will learn different types of choreographies and will also focus on coordination skills, technique, posture and floor work."
      link= "/schedule#intermediate-beginners-description"
    
      />

    </section>
  )
};

export default ClassSection;