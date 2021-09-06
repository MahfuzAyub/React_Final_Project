import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import ProductList from './pages/ProductList';
import ProdDetails from './pages/ProdDetails';
import Loader from "./pages/Loader.jsx";
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";
import { Redirect, useHistory, useLocation } from "react-router";
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import DeleteProduct from './pages/DeleteProduct';
import Signin from './pages/signin';
import { sign } from 'aws4';

const App = () => {
  const [currentProdut, setcurrentProdut] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [p1, setp1] = useState(null);


  return (
    <>
      <Link to='/'>Product List</Link>
      <Link to='/AddProduct'>Add Product</Link>
      <Link to='/signin'>sign In</Link>
      <Switch >
        <Route exact path='/'>
          <ProductList />
        </Route>
        <Route exact path='/List' render={() => <Redirect to='/'></Redirect>}></Route>
        <Route path='/Details/:id'>
          <ProdDetails />
        </Route>
        <Route exact path='/AddProduct' render={() => <AddProduct />}></Route>
        <Route path='/Edit/:id' render={() => <EditProduct />}></Route>
        <Route path='/delete/:id' render={() => <DeleteProduct />}></Route>

        <Route exact path='/signin' render={() => <Signin />}></Route>

        <Route exact path='*'>
          <p>404......Nothing found !!!</p>
        </Route>
      </Switch>
    </>
  );
}

export default App;
