import {Link} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const fetchData = async () => {
            try{
                const reponse = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/login", { 
                    email: email,
                    username: name,
                    phone: phone,
                    password: password
            });
            console.log(reponse);
            } catch (error){
                console.log(error.message);
            }
        };
        fetchData();
    }

    return(
        <div className="formulaire">
            <h2>S'inscrire</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={(event) => {
                    setEmail(event.target.value)}} 
                    type="email" 
                    placeholder="Adresse email" 
                />

                <input onChange={(event) => {
                    setName(event.target.value)}} 
                    type="text" 
                    placeholder="Nom utilisateur" 
                />

                <input onChange={(event) => {
                    setPhone(event.target.value)}} 
                    type="text" 
                    placeholder="Numéro" 
                
                />

                <input onChange={(event) => {
                    setPassword(event.target.value)}}
                    type="password" 
                    placeholder="Mot de passe" 
                />
                <div>
                    <div className="checkbox">
                        <input type="checkbox"/>
                        <span>S'inscrire à notre newsletter</span>
                    </div>

                    <p>En m'inscrivant je confirme avoir lu et accepté les Termes et Conditions et Politique de Confidentialité de Vinted. Je confirme avoir au moins 18 ans.</p>
                </div>
                <button type="submit">S'inscrire</button>
            </form>
            <div className="content_a">
                <Link to="/login">Tu as déjà un compte ?Connecte-toi !</Link>
            </div>
        </div>
    )
}

export default SignUp;