import {Link, useHistory} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          phone: phone,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        // Naviguer vers la home page
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
                    setUsername(event.target.value)}} 
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