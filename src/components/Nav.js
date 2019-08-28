import React from "react";
import { Link } from 'react-router-dom';
import "../components/Nav.css";
import {logout} from "../utils/Authentication";

export default function Nav() {
  return (
    <nav className='tab'>
      <a href='#'>
        <h1 className='logo'>RandomAct</h1>
      </a>
      <div className='nav-links'>
        <Link to='/welcome'>Welcome</Link>
        <Link to='/'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to="/ideas">Ideas</Link>
        < Link to="/contacts"> Contacts </Link>
        <Link to='/randomizer'>Randomizer</Link>
        {/* <a href="#">Randomizer</a> */}
        <a onClick={logout}>Sign Out</a>
      </div>
    </nav>
  )
}

