import React  from 'react';
import {  BrowserRouter as Router,   Switch,  Route,  } from "react-router-dom";
import {  CartProvider} from "./context/CartContext"

import NavBar from './components/NavBar';
import Footer from "./components/footer"
import Home from"./components/Home"
import Cart from "./components/Cart"
import ItemDetail from './components/ItemDetail';

import Category from './components/Category';
import Orders from "./components/Orders"



function App() {

  
 
  return (
   

  <Router>


      <CartProvider>
    
      <NavBar />
      <Switch>
     


      
      
      <Route exact path="/">
       <Home  />
      </Route>

      

        <Route exact path="/item/:id">
        <ItemDetail/>
        </Route>

        <Route path="/category/:id"  > 
        <Category/>
  
     
        </Route>
          



      <Route exact path="/cart">
        <Cart/>
      </Route>


      <Route  path="/order">
        <Orders/>
      </Route>

      

      <Route  path="*">
        <h1>Noexiste</h1>
      </Route>

      </Switch>
      <Footer/>
       </CartProvider>
  </Router>
   
   
 
  );
}

export default App;
