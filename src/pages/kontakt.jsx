import Navigatsioon from "../Components/Navigatsioon"
import styles from "../styles/Kontakt.module.css"

const Kontakt = ()=> {
    return (
        <div>
            <div className = "Meie Kontaktid">
                <div style={{display: 'flex ', flexDirection: 'column'}}/>
                <p style={{color: 'red'}}>MATKAKLUBI KONTAKTID</p>
            </div>
                <div class="textbox"></div>
			        <strong>Paldiski mnt 11, Tallinn<p></p>
				        Telefon</strong>: (+372) 123456<p></p>				
			
            <div className = "Võta ühendust">
                <div style={{display: 'flex ', flexDirection: 'column'}}></div> 
                <p style={{color: 'red'}}>VÕTA ÜHENDUST</p>
                         
                <form>
                    <label style={{}}>Nimi:
                    
                        <input
                            type="text" 
                            placeholder="Sisesta oma nimi"
                            onChange={(e) =>(e.target.value)}
                        />
                    </label>
                </form>
                <form>
                    <label style={{}}><p></p>e-mail:
                    
                        <input
                            type="text" 
                            placeholder="Sisesta e-mail"
                            onChange={(e) =>(e.target.value)}
                        />
                    </label>
                </form>                                     
                        <label for="form"><p></p>Kommentaar:</label>
                    <form>
                        <textarea
                            placeholder= "kommentaar...">
                        </textarea> 
                    </form> 
                    <button onClick={() => {}}>Esita</button>              
                </div>
            </div>
        
    )
}
export default () => {
    return (
        
        <div className={styles.pais}>
            <Navigatsioon/> 
            <Kontakt/>                     
       </div>
    )
}