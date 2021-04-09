import hero from "../assets/img/hero.jpg";
import bando from "../assets/img/bandeauBas.svg";
import { Link } from "react-router-dom";

const Hero = ({ setInfoData, data, setUser, userToken }) => {
  return (
    <div className="hero">
      <div className="hero_css">
        <div className="hero_button">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <Link to="/publish">Commencer à vendre</Link>
        </div>
      </div>
      <div>
        <img src={hero} alt="hero" />
        <img src={bando} alt="bandeauBas" />
      </div>
    </div>
  );
};

export default Hero;
