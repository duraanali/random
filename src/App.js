import React, {useState} from 'react';
import { Route } from "react-router-dom";
import './App.css';
import FormikLoginForm from "./components/LoginForm";
import FormikSignUpForm from "./components/SignUpForm"
import Nav from "./components/Nav";
import PrivateRoute from "./utils/PrivateRoute";
import RandomActsList from './components/RandomActs/RandomActsList';
import Randomizer from "./components/Randomizer";
import ContactList from "./components/Contacts/ContactsList";
import RandomActsAdd from './components/RandomActs/RandomActsAdd';
import { Dashboard } from './components/Dashboard';
import UserHome from './components/UserHome';
import ContactsAdd from './components/Contacts/ContactsAdd';
import ContactsEdit from "./components/Contacts/ContactsEdit";


import BackDrop from './components/BackDrop/BackDrop';
import SideDrawer from "./components/SideDrawer/SideDrawer";


import RandomActsEdit from "./components/RandomActs/RandomActsEdit";

function App() {
  const [state, setState] = useState(false);
  function drawerToggleClickHandler() {
    state ? setState(false) : setState(true);
  }

  let backdrop;

  if (state) {
    backdrop = <BackDrop click={backDropClickHandler} />;
  }

  function backDropClickHandler() {
    setState(false);
  }

  return (
    <div>
      
      <Nav drawerClickHandler={drawerToggleClickHandler}/>
      <SideDrawer show={state} />
      {backdrop}

      <Route exact path='/' component={FormikLoginForm} />
      <Route exact path='/signup' component={FormikSignUpForm} />
       <PrivateRoute exact path='/updatecontact/:id' component={ContactsEdit} />
      <PrivateRoute path='/ideas' component= { RandomActsAdd } />
      <PrivateRoute path='/ideas' component={ RandomActsList } />
      <PrivateRoute exact path='/home' component={ Dashboard } />
      <PrivateRoute exact path='/randomizer' component={Randomizer} />
      <PrivateRoute exact path='/contacts' component={ContactsAdd}/>
      <PrivateRoute exact path = '/contacts'component={ContactList}/>
      <PrivateRoute exact path = '/updateact/:id'component={RandomActsEdit}/>
      <PrivateRoute path='/welcome' component={ UserHome } />

     

    </div>
  );
}

export default App;
