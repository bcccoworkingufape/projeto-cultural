import { signOut } from "firebase/auth";
import {auth} from "../../services/firebase"

const Logout = () =>{
    const handleLogOut = () =>{
        signOut(auth);
        console.log("saindo...");
        window.location.href = "/login"
    }

    return(
        <div>
            <button onClick={handleLogOut}>Sair</button>
        </div>
    )
}

export default Logout;