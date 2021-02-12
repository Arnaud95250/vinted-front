import axios from 'axios';
import {Link} from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({setUser}) => {
    const [email, setEmail] = useState(""); // variable qui stock ma value email de mon input
    const [password, setPassword] = useState(""); // variable qui stock ma value password de mon input

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();// Permets de garder le formulaire rempli s'il y a une erreur
        const fetchData = async () => {
            try{
                const reponse = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/login", { // chemin vers mon API ou je fais fais une methode POST pour identification d'un membre
                    email: email, // je recupère la value qi se trouve dans mon input email et j'envoie les données en POST
                    password: password
            });
            setUser(reponse.data.token);// je récupère le token du membre dans les paramettre de la fonction setUser(les paramettre son retrensmit dans le parent et stocké dans un cookie)
            // console.log(reponse.data)
            history.push("/"); // Si le membre à bien été identifier je le redirige sur la homePage (home.js)
            } catch (error){
                console.log(error.message);
            }
        };
        fetchData();
    }
    console.log(setUser); // console.log() de ma function setUser transmit en props via ma route dans ma homePage(home.js)
    return(
        <div className="formulaire">
            <h2>Se connecter</h2>
            <form onSubmit={handleSubmit}>

                <input
                    onChange={(event) => setEmail(event.target.value)} // je recupère les caractère rentrée dans mon input
                    type="email" 
                    placeholder="Adresse email"
                    // value="brice@lereacteur.io"
                />

                <input 
                    onChange={(event) => setPassword(event.target.value)}
                    type="password" 
                    placeholder="Mot de passe" 
                />

                <button type="submit">Se connecter</button>
            </form>
            <div className="content_a">
                <Link to="/signup">Pas encore de compte ? Inscrits-toi!</Link>
            </div>
        </div>
    )
}

export default Login;










// <div className="login">
//             <div>
//                 <h1>Se connecter</h1>
//                 <form onSubmit={handleSubmit }> {/*formulaire d'authentification avec fonction onSubmit qui envoie les value des input à ma fonction handleSubmit via des paramettre (event)*/}
//                     <input
//                         onChange={(event) => setEmail(event.target.value)} // je recupère les caractère rentrée dans mon input
//                         type="email" 
//                         placeholder="Adresse email"
//                         // value="brice@lereacteur.io"
//                     />

//                     <input 
//                         onChange={(event) => setPassword(event.target.value)}
//                         type="password" 
//                         placeholder="Mot de passe" 
//                     />

//                     <button type="submit">Se connecter</button> 
//                 </form>
//             </div>
//         </div>