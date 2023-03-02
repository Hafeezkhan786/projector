import React, { Component } from 'react';
import {Switch,Router, Route} from "react-router-dom" 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Card from './components/Card';
import Details from './components/Details';
import Default from './components/Default';


class App extends Component {
render(){  
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path ='/' component ={ProductList}></Route>
        <Route path ='/details' component ={Details}></Route>
        <Route path ='/Card' component ={Card}></Route>
        <Route  component ={Default}></Route>
      </Switch>

    </React.Fragment>
  );
 }
}

export default App;
