import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Jumbotron, Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Products from "./Products";
import Stores from "./Stores";
import Categories from "./Categories";

export default function App() {
  return (
    <Router>
      <div>
        <nav id="main-nav" className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="">
            Tee Commerce Database Access
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stores">
                  Stores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time*/}
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
      <Jumbotron>
        <h1 className="Welcome"> Welcome</h1>
        <p className="Description">
          Online pro shops for golf courses, country clubs, and charity golf
          tournaments
        </p>

<<<<<<< HEAD
        <Form className="Searchbar" inline>
          <FormControl
            type="text"
            placeholder="Search by Product"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Jumbotron>
=======
  </p>
  <p>
  <Form className="Searchbar" inline>
      <FormControl type="text" placeholder="Search by Product" className="mr-sm-2" />
      <Button  variant="outline-success">Search</Button>
    </Form>
  </p>
</Jumbotron>
  
  <Jumbotron>
  <h1 className="Welcome"> Categories</h1>
   </Jumbotron>
   
<p class="card" >
  <img src ="https://tcimages.imfast.io/ACX/ACX.12OZWT.Stainless.A1.jpg" class="card-img-top" alt="new"></img>
  </p>
    <a href="http://localhost:5000/products" class="btn btn-primary">Golf Accessories</a>
>>>>>>> 0f7c1b896dc04d10c7de7367524b9d3ec553de29

      <Jumbotron>
        <h1 className="Welcome"> Categories</h1>
      </Jumbotron>

      <p className="card">
        <img
          src="https://tcimages.imfast.io/ACX/ACX.12OZWT.Stainless.A1.jpg"
          className="card-img-top"
          alt="new"
        ></img>
      </p>
      <a href="http://localhost:5000/products" className="btn btn-primary">
        Golf Accesories
      </a>

      <p className="card2">
        <img
          src="https://tcimages.imfast.io/ACX/ACX.A190.Black.A1.jpg"
          className="card-img-top2"
          alt="new"
        ></img>
      </p>
      <a href="http://localhost:5000/products" className="btn btn-primary">
        Men's Lifestyle Wear
      </a>
    </div>
  );
}
