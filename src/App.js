//Import des fichier css***************************
import "./App.scss";
import "./assets/scss/home.scss";
import "./assets/scss/header.scss";
import "./assets/scss/footer.scss";
import "./assets/scss/hero.scss";
import "./assets/scss/offer.scss";
import "./assets/scss/form.scss";
//Import packages**********************************
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

//Import des cpmponents***************************
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

//Import des containers(les pages)*****************
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken" || null));
  const [data, setData] = useState([]);

  const setInfoData = (data) => {
    setData(data);
  };

  const setUser = (token) => {
    // fonction qui pemet de récuper et stocker le token dans un cookie (envoyé en paramettre aux enfant dans les route login et signUp)
    if (token) {
      Cookies.set("userToken", token, { expires: 7 }); // création du cookie Cookies.set("nom_du_cookie", paramettre que je stock, { la date ou le cookie doit disparaitre: 7 });
      setUserToken(token); // met à jour le userToken
    } else {
      Cookies.remove("userToken"); // si
      setUserToken(null);
    }
  };

  return (
    <div className="container">
      <Router>
        <Header
          setInfoData={setInfoData}
          userToken={userToken}
          setUserToken={setUserToken}
          setUser={setUser}
        />
        <Switch>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/publish">
            <Publish userToken={userToken} />
          </Route>
          <Route path="/payment">
            <Payment userToken={userToken} />
          </Route>
          <Route path="/product/:id">
            <Offer />
          </Route>
          <Route path="/">
            <Hero />
            <Home setInfoData={setInfoData} data={data} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
