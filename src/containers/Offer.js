import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <main className="body_offer">
      <div className="offer">
        {isLoading ? (
          <span>En cours de chargement... </span>
        ) : (
          <div className="offer_content">
            <div>
              <img src={data.product_image.secure_url} alt="" />
            </div>
            <div className="offer_info">
              <div className="topCard">
                <p>{data.product_price} €</p>
                {/* AFFICHE MES PRODUCTS_DETAILS : */}
                {data.product_details.map((elem, index) => {
                  const keys = Object.keys(elem);
                  const elems = Object.values(elem);
                  return (
                    <div key={index}>
                      <div>
                        <span>{keys}</span>
                      </div>
                      <div>
                        <span>{elems}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr />
              <div>
                <p>{data.product_name}</p>
                <p>{data.product_description}</p>
              </div>

              <div>
                <button>
                  <Link to={{ pathname: "/payment", state: data }}>
                    Acheter
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Offer;
