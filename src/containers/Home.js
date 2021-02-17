import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const Home = ({setInfoData, data}) => {
    // const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{  
                const response = await axios.get(
                    // "https://vinted-le-reacteur.herokuapp.com/offer/offer_filter/"
                    "https://lereacteur-vinted-api.herokuapp.com/offers"
                );
                // console.log(response.data);
                setInfoData(response.data);
                setIsLoading(false);
            } catch (error){
                console.log(error.message);
            }
        };
        fetchData();
      }, []);

    return(
        <div className="home">
            {isLoading ? (
                <span>En cours de chargement... </span>
                ) : (
                <div className="container_offers">
                        {data.offers.map((elem, index) => {
                            // console.log(elem.product_image.url);
                    return (
                        <Link to={`/product/${elem._id}`} key={index} className="offers_a">
                            <div  className="offers">
                                <div>
                                    {elem.owner.account.avatar && (
                                        <img src={elem.owner.account.avatar.secure_url} alt="" />
                                    )}
                                    <span>{elem.owner.account.username}</span>
                                </div>
                                <img src={elem.product_image.secure_url}/>
                                <span>{elem.product_price}€</span>
                                <span>{elem.product_name}</span>
                            </div>
                        </Link>
                        );
                    })}
                </div>
                )}
        </div>
    )
}

export default Home;


//Pour mon API
// {data.offers.map((elem, index) => {
//     console.log(elem);
// return (
// <div key={index} >
//     <h3>{elem.product_name}</h3>
//     <p>{elem.product_description}</p>
//     <p>{elem.product_price}</p>
//     <img>{elem.product_image}</img>
// </div>
// );
// })}