import logo from '../assets/img/logo.png'
import hero from '../assets/img/hero.jpg'
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const Header = ({setInfoData, data, setUser, userToken}) => {
  const [search, setSearch] = useState("");
  // const handleChange = event => {
  //   setSearch(event.target.value);
  // };


  
  const checkFilter = async (event) => {
    // useEffect(() => {
      try{  
          const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`);
            console.log(response.data);
            if(search){
              setInfoData(response.data);
            }else {
              setInfoData(response.data);
            }
      } catch (error){
          console.log(error.message);
      }
      //   checkFilter();
// }, []);
  };



  // const checkFilter = async (event) => {
  //   try {
  //     event.preventDefault();
  //     const response = await axios.get(
  //       "https://lereacteur-vinted-api.herokuapp.com/offers?title=zara", {
  //         title: title,
  //     })
  //     console.log(response.data)
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  // };



  return(
    <div className="header">
        <nav>
          <Link to="/"><img src={logo} alt="logo"/></Link>



             
              <form onChange={checkFilter}>
              <input
                    onChange={(event) => setSearch(event.target.value)} // je recupère les caractère rentrée dans mon input
                    type="text" 
                    placeholder="Votre recherche"
                />
              </form>
                
     
          


            {userToken ? (
              <Link to="/login"><button className="button_deconneter" onClick={() => setUser(null)}>Se déconnecter</button></Link>
            ) : (
              <div>
                  <Link to="/signup"><button>S'inscrire</button></Link>
                  <Link to="/login"><button>Se connecter</button></Link>
              </div>
            )}
            <div className="filter"></div>
          </nav>
          <div>
            <img src={hero} alt="hero"/>
          </div>
    </div>
  )
}

export default Header;



// useEffect(() => {
//   const checkFilter = async (event) => {
//       try{  
//           const response = await axios.get(
//               "https://lereacteur-vinted-api.herokuapp.com/offers?title=zara"
//             );
//             console.log(response.data);
//             setData(response.data);
//             // setIsLoading(false);
//       } catch (error){
//           console.log(error.message);
//       }
//   };
//   checkFilter();
// }, []);