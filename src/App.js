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
import SignOut from './pages/signOut';
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import Products from './components/Products';
import Footer from './components/Footer';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {
  const [currentProdut, setcurrentProdut] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [p1, setp1] = useState(null);

  return (
    <>
      <Announcement />
      <Navbar />
      <Switch >
        <Route exact path='/'>
          <Products />
        </Route>
        <Route exact path='/List' render={() => <Redirect to='/'></Redirect>}></Route>
        <Route path='/Details/:id'>
          <ProdDetails />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/AddProduct' render={() => <AddProduct />}></Route>
        <Route path='/Edit/:id' render={() => <EditProduct />}></Route>
        <Route path='/delete/:id' render={() => <DeleteProduct />}></Route>
        {/* <Route exact path='/signin' render={() => <Signin />}></Route> */}
        <Route exact path='/signin' render={() => <Signin />}></Route>
        <Route exact path='/signout' render={() => <SignOut />}></Route>

        <Route exact path='*'>
          <p>404......Nothing found !!!</p>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
export default App;
