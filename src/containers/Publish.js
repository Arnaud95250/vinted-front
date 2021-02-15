import axios from 'axios';
import { useState } from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";


const Publish = ({setUser, setInfoData, userToken}) => {
    const [file, setFile] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [marque, setMarque] = useState("")
    const [taille, setTaille] = useState("")
    const [couleur, setCouleur] = useState("")
    const [etat, setEtat] = useState("")
    const [lieu, setLieu] = useState("")
    const [prix, setPrix] = useState("")
    const [data, setData] = useState()


    const handleSubmit = async (event) => {
        try {
            event.preventDefault(); 
            const formData = new FormData(); 
            formData.append("picture", file);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("marque", marque);
            formData.append("taille", taille);
            formData.append("couleur", couleur);
            formData.append("etat", etat);
            formData.append("lieu", lieu);
            formData.append("price", prix);
            const token = userToken;

            const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                formData,{headers: { authorization: `Bearer ${token}`}});
                    console.log(token);
                    console.log(response.data);
                    setData(response.data)
        } catch (error) {
            console.log(error.request);
        }
        // console.log(file, title, description, marque, taille, couleur, etat, lieu, prix)
    };
    // console.log(userToken);

    return(
        <div className="formulaire_publish">
            <h2>Publier votre annonce</h2>
            <form onSubmit={handleSubmit}>
                <div className="content_section_file">
                    <div>
                        <label>
                            <span>+</span>
                            <span>Ajouter une photo</span>
                        <input
                            onChange={(event) => setFile(event.target.files[0])}
                            type="file" 
                            required
                        />
                        </label>
                    </div>
                    
                </div>
                    

                <div className="content_section">
                    <div className="content_input_text">
                        <label>Titre</label>
                        <input 
                            onChange={(event) => setTitle(event.target.value)}
                            type="text" 
                            placeholder="ex: Doudone The North Face"
                            required
                        />
                    </div>
                    <div className="content_input_text">
                        <label>Décris ton article</label>
                        <input 
                            onChange={(event) => setDescription(event.target.value)}
                            type="text" 
                            placeholder="ex: porté quelque fois, taille correctement "
                            required

                        />
                    </div>
                </div>

                <div className="content_section">
                    <div className="content_input_text">
                        <label>Marque</label>
                        <input
                            onChange={(event) => setMarque(event.target.value)}
                            type="text" 
                            placeholder="ex: The North Face" 
                            required
                        />
                    </div>
                    <div className="content_input_text">
                        <label>Taille</label>
                        <input
                            onChange={(event) => setTaille(event.target.value)}
                            type="text" 
                            placeholder="ex: Taile M " 
                        />
                        </div>
                    <div className="content_input_text">
                        <label>Couleur</label>
                        <input
                            onChange={(event) => setCouleur(event.target.value)}
                            type="text" 
                            placeholder="ex: Fushia" 
                        />
                    </div>
                    <div className="content_input_text">
                        <label>Etat</label>
                        <input
                            onChange={(event) => setEtat(event.target.value)}
                            type="text" 
                            placeholder="ex: Neuf avec étiquette" 
                            required
                        />
                    </div>
                    <div className="content_input_text">
                        <label>Lieu</label>
                        <input 
                            onChange={(event) => setLieu(event.target.value)}
                            type="text" 
                            placeholder="ex: Paris" 
                            required
                        />
                    </div>
                </div>
               <div className="content_section">
                    <div className="content_input_text">
                        <label>Prix</label>
                        <input 
                            onChange={(event) => setPrix(event.target.value)}
                            type="text" 
                            placeholder="ex: 100 €" 
                            required

                        />
                    </div>
               </div>
     
                
                    <button type="submit"><Link to="/">Ajouter votre annonce</Link></button>
     

                
            </form> 
        </div>
    )
}

export default Publish