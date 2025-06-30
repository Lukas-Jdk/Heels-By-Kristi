import styles from '../styles/index.module.css';
import Header from '../components/Header/Header';
import Hero from '../components/Layout/Hero';
import ButtonGroup from'../components/ButtonGroup/ButtonGroup';
import ClassSection from '../components/Home/ClassSection';


const HomePage = () => {
  return (
    <>
    <Header />
    <Hero title= "" videoSrc='videos/intro.mp4' height='full'/>
    <div className={styles.container}> 
      <ButtonGroup/>
      <ClassSection/>
      </div>
   
    </>
  )
};
export default HomePage;
