import React, { Fragment, Component }from 'react';
import { Link, Route } from "react-router-dom";
import './UserHome.css';
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
        <figure class="snip1321"> <img src ={newconimg} alt="Contacts" class="center" />
  <figcaption><i class="ion-upload"></i>
    <h4>Upload</h4>
    <h2>Contacts</h2>
  </figcaption><a href="/contacts"></a>
</figure>
<figure class="snip1321"> <img src={newidimg} alt="Ideas" class="center" />
  <figcaption><i class="ion-stats-bars"></i>
    <h4>View </h4>
    <h2>Ideas </h2>
  </figcaption><a href="/ideas"></a>
</figure>
<figure class="snip1321"> <img src={newranimg} alt="randomizer" class="center" />
  <figcaption><i class="ion-share"></i>
    <h4>View</h4>
    <h2>Randomizer</h2>
  </figcaption><a href="/randomizer"></a>
</figure>
</div>

</div>
    );
};