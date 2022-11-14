import styles from "./Navigatsioon.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

export default () => {
    return(
        <nav className={styles.paisNav}>       
            <Link href="/">
                <a className={styles.logo}>
                    <div className={styles.logoPilt}> 
                        <Image
                            alt="Matkaklubi logo"
                            src={logo}
                            quality={100}
                            sizes="100vw"              
                        /> 
                    </div>         
                    <section className={styles.logoTekst}>
                        <span>HIKING</span>
                        <span>CLUB</span> 
                    </section>
                </a>          
            </Link>        
            <div className={styles.paremPool}>
                <Link href="/">
                    <a className={styles.paremPoolLink}>HOME</a>
                </Link>
                <Link href="/treks">
                    <a className={styles.paremPoolLink}>UPCOMING TREKS</a>
                </Link>
                <Link href="/">
                    <a className={styles.paremPoolLink}>TREKS FOR FAMILY</a>
                </Link>
                <Link href="/kontakt">
                    <a className={styles.paremPoolLink}>CONTACT US</a>
                </Link>
            </div>
        </nav>
    )
}