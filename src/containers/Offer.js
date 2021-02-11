import {useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const Offer = () => {
    const {id} = useParams();
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{  
                const response = await axios.get(
                    `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
                  );
                  console.log(response.data);
                  setData(response.data);
                  setIsLoading(false);
            } catch (error){
                console.log(error.message);
            }
        };
        fetchData();
      }, []);


      return(
          <main className="body_offer">
            <div className="offer">
                <Link to='/'>Go to Home</Link>
                {isLoading ? (
                    <span>En cours de chargement... </span>
                    ) : ( 
                        <div className="offer_content">
                            <div>
                                <img src={data.product_image.secure_url}/>
                            </div>
                            <div className="offer_info">
                                <div>
                                    <span className="offer_price">{data.product_price}</span>
                                    {data.product_details.map((elem, index) => {
                                        return(
                                            <div>
                                            <span>{elem.MARQUE}</span>
                                            <span>{elem.ÉTAT}</span>
                                            <span>{elem.COULEUR}</span>
                                            <span>{elem.EMPLACEMENT}</span>
                                        </div>
                                        )
                                    })}
                                </div>
                                <hr/>
                                <div>
                                    <p>{data.product_name}</p>
                                    <p>{data.product_description}</p>
                                </div>
                            </div>
                        </div>
                    )}
                
            </div>  
        </main>
        )
}

export default Offer;



// <ul className="offer-list">
                                    //     <li><span>MARQUE</span>
                                    //         <span>{elem.MARQUE}</span>
                                    //     </li>
                                    //     <li><span>ÉTAT</span>
                                    //         <span>{elem.ÉTAT}</span>
                                    //     </li>
                                    //     <li><span>COULEUR</span>
                                    //         <span>{elem.COULEUR}</span>
                                    //     </li>
                                    //     <li><span>EMPLACEMENT</span>
                                    //         <span>{elem.EMPLACEMENT}</span>
                                    //     </li>
                                    // </ul>