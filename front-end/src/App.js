import React from "react";
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Products from './Products'
import Stores from './Stores'
import Categories from './Categories'

export default function App() {
  return (
    <Router>
      
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">Tee Commerce DB</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Stores">Stores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Categories">Categories</Link>
            </li>
          </ul>
        </div>
        </nav>
      <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time*/
        }
  <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/stores">
            <Stores />
          </Route>
          <Route path="/categories">
            <Categories />
            </Route>
        </Switch>
       </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}


