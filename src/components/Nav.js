import React from "react";
import { Link } from 'react-router-dom';
import "../components/Nav.css";

export default function Nav() {
  return (
    <nav className='tab'>
      <a href='#'>
        <h1 className='logo'>RandomAct</h1>
      </a>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to="/ideas">Ideas</Link>
        <Link to='/randomizer'>Randomizer</Link>
        {/* <a href="#">Randomizer</a> */}
        <a href="#">Sign Out</a>
      </div>
    </nav>
  )
}

