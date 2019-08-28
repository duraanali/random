import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import FormikLoginForm from "./components/LoginForm";
import FormikSignUpForm from "./components/SignUpForm"
import Nav from "./components/Nav";
import PrivateRoute from "./utils/PrivateRoute";
import Header from './components/Header';
import RandomActsList from './components/RandomActs/RandomActsList';
import Randomizer from "./components/Randomizer";
import ContactList from "./components/Contacts/ContactsList";
import RandomActsAdd from './components/RandomActs/RandomActsAdd';
import { Dashboard } from './components/Dashboard';
import UserHome from './components/UserHome';
import ContactsList from './components/Contacts/ContactsList';
// import ContactsAdd from './components/Contacts/ContactsAdd';


function App() {
  return (
    <div>
      <Nav />
      <Route exact path='/' component={FormikLoginForm} />
      <Route exact path='/signup' component={FormikSignUpForm} />
      <PrivateRoute path='/ideas' component= { RandomActsAdd } />
      <PrivateRoute path='/ideas' component={ RandomActsList } />
      <PrivateRoute exact path='/home' component={ Dashboard } />
      <PrivateRoute exact path='/randomizer' component={Randomizer} />
      <PrivateRoute exact path = '/contacts'component={ContactList}/>
      <PrivateRoute path='/welcome' component={ UserHome } />

    </div>
  );
}

export default App;
