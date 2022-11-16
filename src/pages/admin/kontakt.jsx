import { AdminPais } from "."
import { useContact } from "../../api"


const KontaktAdmin = () => {
    return(
        <div style= {{padding: 30}}>
            <h1>Matkad admin</h1>
            <AdminPais/>
            <Kontakt/>
        </div>

    )
}
export default KontaktAdmin