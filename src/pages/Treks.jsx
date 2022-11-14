import Image from "next/image"
import { useTreks } from "../api"
import Navigatsioon from "../Components/Navigatsioon"
import styles from "../styles/Treks.module.css"




const Matk = ({ matk }) => {
    return(
        <div className={styles.matk}>
            <div className={styles.pildiKonteiner}>
                <Image 
                    alt={'${matk.title} pilt'} 
                    src={'https://res.cloudinary.com/image/fetch/ ${matk.imageUrl}'}
                    quality={100}
                    layout= 'fill'
                    objektFit= 'contain'              
                />
            </div>
            <span>{matk.title}</span> 
        </div>
    )
}

const Matkad = () =>{
    const { data, error } = useTreks()
    if (error) return <div>Viga matkade laadimisel</div>
    if (!data) return <div>Laen sisu...</div>
    
    return (
        <div className={styles.matkad}>
            {data.map(matk => <Matk key={matk.id} matk= {matk}/>)}
        </div>
    )    
}

export default () => {
    return (
        <div className={styles.pais}>
            <Navigatsioon/> 
            <Matkad/>                     
       </div>
    )
}