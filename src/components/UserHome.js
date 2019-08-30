import React from 'react';
import './UserHome.css';
import { Link } from 'react-router-dom';
import newconimg from './images/New-Contacts.png'
import newidimg from './images/New-Ideas.png'
import newranimg from './images/New-Randomizer.png'

export default function UserHome () {
// THIS PAGE CAN BE FOUND AT /WELCOME
// This page is for when users log-in, it connects them here to the welcome back page.

    return (
<div>
        <div className='WelcomeBack'>
            <h2>Welcome Back</h2>
        </div>

<div className='shapes'>
        <figure className="snip1321"> <img src ={newconimg} alt="Contacts" className="center" />
  <figcaption><i className="ion-upload"></i>
    <h4>Upload</h4>
    <h2>Contacts</h2>
  </figcaption>
  <Link to="/contacts" />

</figure>
<figure className="snip1321"> <img src={newidimg} alt="Ideas" className="center" />
  <figcaption><i className="ion-stats-bars"></i>
    <h4>View </h4>
    <h2>Ideas </h2>
  </figcaption>
  <Link to ="/ideas" />
</figure>
<figure className="snip1321"> <img src={newranimg} alt="randomizer" className="center" />
  <figcaption><i className="ion-share"></i>
    <h4>View</h4>
    <h2>Randomizer</h2>
  </figcaption>
  <Link to="/randomizer" />
</figure>
</div>

</div>
    );
};