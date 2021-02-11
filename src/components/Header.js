import logo from '../assets/img/logo.png'
import hero from '../assets/img/hero.jpg'
import {Link} from "react-router-dom";

const Header = ({setUser, userToken}) => {
  return(
    <div className="header">
        <nav>
          <Link to="/"><img src={logo} alt="logo"/></Link>
            {userToken ? (
              <Link to="/login"><button onClick={() => setUser(null)}>Se déconnecter</button></Link>
            ) : (
              <div>
                  <Link to="/signup"><button>S'inscrire</button></Link>
                  <Link to="/login"><button>Se connecter</button></Link>
              </div>
            )}
          </nav>
          <div>
            <img src={hero} alt="hero"/>
          </div>
    </div>
  )
}

export default Header;