import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try{  
                const response = await axios.get(
                    // "https://vinted-le-reacteur.herokuapp.com/offer/offer_filter/"
                    "https://lereacteur-vinted-api.herokuapp.com/offers"
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
        <div className="home">
            {isLoading ? (
                <span>En cours de chargement... </span>
                ) : (
                <div className="container_offers">
                        {data.offers.map((elem, index) => {
                            // console.log(elem.product_image.url);
                    return (
                        <Link to={`/product/${elem._id}`}>
                            <div key={index} className="offers">
                                <div>
                                    <img src="https://res.cloudinary.com/lereacteur/image/upload/v1610363014/api/vinted/users/5ffc305a068f67f73652e9bd/avatar.jpg"/>
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