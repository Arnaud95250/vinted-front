import './App.css';
import React from "react";
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

//Import des cpmponents*****************
import Header from'./components/Header';
import Footer from'./components/Footer';

//Import des containers(les pages)*****************
import Home from'./containers/Home';
import Offer from'./containers/Offer';

function App() {
  return (
    <div className="container">
      <Router>
        <Header/>
          <Switch>
              <Route path="/product">
                <Offer/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
