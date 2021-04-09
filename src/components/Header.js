import logo from "../assets/img/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = ({ setInfoData, setUser, userToken }) => {
  const checkFilter = async (search) => {
    try {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
      );
      setInfoData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="header">
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <input
          onChange={(event) => checkFilter(event.target.value)} // je recupère les caractère rentrée dans mon input
          type="text"
          placeholder="Votre recherche"
        />
        {userToken ? (
          <div>
            <Link to="/login">
              <button
                className="button_deconneter"
                onClick={() => setUser(null)}
              >
                Se déconnecter
              </button>
            </Link>
            <Link to="/publish">
              <button className="button_publish">Vends tes articles</button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </div>
        )}
        <div className="filter"></div>
      </nav>
    </div>
  );
};

export default Header;
