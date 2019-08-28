import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import FormikLoginForm from "./components/LoginForm";
import FormikSignUpForm from "./components/SignUpForm"
import Nav from "./components/Nav";
import Header from './components/Header';
import RandomActsList from './components/RandomActs/RandomActsList';
import RandomActsAdd from './components/RandomActs/RandomActsAdd';


function App() {
  return (
    <div>
      <Nav />
      <Route exact path='/login' component={FormikLoginForm} />
      <Route exact path='/signup' component={FormikSignUpForm} />
      <Route path='/ideas' component= { RandomActsAdd } />
      <Route path='/ideas' component={ RandomActsList } />
      
      {/* <RandomActsList /> */}
    
    
    </div>
  );
}

export default App;
