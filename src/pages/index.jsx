import Head from "next/head";
import Navigatsioon from "../Components/Navigatsioon";
import styles from "../styles/Home.module.css";

const Pais = () => {
  return (
    <div className={styles.pais}>
      <Navigatsioon/>
      <div className={styles.paisAlumine}>
        <div className={styles.paisAlumineSisu}> 
          <img className={styles.paisAlumineSisuIkoon1}/>                     
          <h2 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH2}`}>CLIMB FOR BETTER</h2>           
          <img className={styles.paisAlumineSisuIkoon2}/>
          <h1 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH1}`}>GET OUT NOW</h1>
          <h4 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH4}`}>JOIN US FOR THE WEEKEND TO CLIMB THE<p></p>HIGHEST PEAK IN ENGLAND</h4>
          <button className={styles.nupp}>VIEW UPCOMING TREKS</button>
        </div>
        <div className={styles.paisAluminePilt}></div>          
      </div>      
    </div>
  )
}

const Teine = ()=>{
  return(
    <div className= {styles.teine}>
      <section className={styles.ylemine}>
        <h5 className={styles.teineYlemineH5Hall}>CHOOSE</h5>
        <h6 className={styles.teineYlemineH6}>These Best<p></p>Treks For Spring</h6>
      </section>                               
      <div className ={styles.teineAlumine}>
        <div className= {styles.TeineAlumineVasak}>
          <p className= {styles.teineAlumineVasakSection}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum su spendisse ultrices gravida. Risus commodo viverra maec enas accumsan lacus vel facilisis.
          </p>
          <div className={styles.teineAlumineVasakNooled}>
            <span className={styles.nooledVasakParem}>←</span>
            <span className={styles.nooledKokkuLehekylgi}>01</span>
            <span className={`${styles.nooledKaldkriips} ${styles.nooledKaldkriipsKokkuLehekylgiParem} ${styles.nooledKaldkriipsKokkuLehekylgi}`}>/</span>
            <span className={`${styles.nooledKaldkriipsKokkuLehekylgi} ${styles.nooledKaldkriipsKokkuLehekylgiParem}`}>06</span>
            <span className={`${styles.nooledVasakParem} ${styles.paisAlumineSisuH4} ${styles.nooledKaldkriipsKokkuLehekylgiParem}`}>→</span>
          </div>          
        </div>                         
        <div className={styles.teineAlumineParem}>               
          <div className={`${styles.teineAlumineParemPilt} ${styles.teineAlumineParemPilt1}`}></div>
          <div className={`${styles.teineAlumineParemPilt} ${styles.teineAlumineParemPilt2}`}></div>
          <div className={`${styles.teineAlumineParemPilt} ${styles.teineAlumineParemPilt3}`}></div>        
        </div>
      </div>   
    </div>

  )
}


const Home = () => {
  return (
    <div>
      <Head>
        <title>Matkaklubi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Pais/>
      <Teine/>   
           
    </div>
  );
};

export default Home;
