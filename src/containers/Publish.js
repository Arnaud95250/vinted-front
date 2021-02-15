import axios from 'axios';
import {Link} from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Publish = ({setUser, setInfoData, data, userToken}) => {
    const [file, setFile] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [marque, setMarque] = useState("")
    const [taille, setTaille] = useState("")
    const [couleur, setCouleur] = useState("")
    const [etat, setEtat] = useState("")
    const [lieu, setLieu] = useState("")
    const [prix, setPrix] = useState("")


    const handleSubmit = async (event) => {
        try {
            event.preventDefault(); 

            const formData = new FormData(); 
            formData.append("secure_url", file);
            formData.append("product_name", title);
            formData.append("product_description", description);
            formData.append("marque", marque);
            formData.append("taille", taille);
            formData.append("couleur", couleur);
            formData.append("etat", etat);
            formData.append("lieu", lieu);
            formData.append("product_price", prix);
            const token = userToken;

            const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                formData,{headers: { authorization: `Bearer ${token}`}});
                    if(token){
                        console.log(response.data);
                        setInfoData(response.data);
                    } else {
                        console.log("le token ne correspond pas")
                    }
        } catch (error) {
            console.log(error.message);
        }
        console.log(file, title, description, marque, taille, couleur, etat, lieu, prix)
    };


    return(
        <div className="formulaire_publish">
            <h2>Publier votre annonce</h2>
            <form onSubmit={handleSubmit}> {/*onSubmit={}*/}
                <div>
                    <label></label>
                    <input
                        onChange={(event) => setFile(event.target.files[0])}
                        type="file" 
                    />
                </div>
                    

                <div>
                    <div>
                        <label>Titre</label>
                        <input 
                        onChange={(event) => setTitle(event.target.value)}
                        type="text" 
                        placeholder="ex: Doudone The North Face" 
                        />
                    </div>
                    <div>
                        <label>Décris ton article</label>
                        <input 
                            onChange={(event) => setDescription(event.target.value)}
                            type="text" 
                            placeholder="ex: porté quelque fois, taille correctement " 
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <label>Marque</label>
                        <input
                            onChange={(event) => setMarque(event.target.value)}
                            type="text" 
                            placeholder="ex: The North Face" 
                        />
                    </div>
                    <div>
                        <label>Taille</label>
                        <input
                            onChange={(event) => setTaille(event.target.value)}
                            type="text" 
                            placeholder="ex: Taile M " 
                        />
                        </div>
                    <div>
                        <label>Couleur</label>
                        <input
                            onChange={(event) => setCouleur(event.target.value)}
                            type="text" 
                            placeholder="ex: Fushia" 
                        />
                    </div>
                    <div>
                        <label>Etat</label>
                        <input
                            onChange={(event) => setEtat(event.target.value)}
                            type="text" 
                            placeholder="ex: Neuf avec étiquette" 
                        />
                    </div>
                    <div>
                        <label>Lieu</label>
                        <input 
                            onChange={(event) => setLieu(event.target.value)}
                            type="text" 
                            placeholder="ex: Paris" 
                        />
                    </div>
                </div>
               <div>
                    <div>
                        <label>Prix</label>
                        <input 
                            onChange={(event) => setPrix(event.target.value)}
                            type="text" 
                            placeholder="ex: 100 €" 
                        />
                    </div>
               </div>

                    <div className="content_a">
                        {/* <Link to="/"><button type="submit">Ajouter votre annonce</button></Link> */}
                        <button type="submit">Ajouter votre annonce</button>
                    </div>
             
                
            </form>

            {/* {userToken === true ? (
              <div className="content_a">
              <Link to="/"></Link>
          </div>
            ) : (
              <div>
                  {console.log("error")}
              </div>
            )} */}
            
        </div>
    )
}

export default Publish