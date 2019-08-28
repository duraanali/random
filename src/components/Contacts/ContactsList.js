import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import axiosWithAuth from "../../utils/axiosWithAuth"
import ContactsCard from './ContactsCard';

import './Contacts.css';


const ContactsList = (user_id) => {
  const [contacts, setContact] = useState([]);

  useEffect(() => {
    axiosWithAuth().get(`https://random-ark-generator.herokuapp.com/api/contacts/${user_id}`)
    .then(res => {
      console.log(res)
      setContact(res.data)
    })
    .catch(err => console.log('Contacts list not working ', err))
  }, []);

  return (
    <div>
      <div className="contact-wrap">
        <h1>Contacts</h1>
        </div>
        <div className='contacts-cards'>
          {contacts.length ? (
            contacts.map(contact => {
              return <ContactsCard contact={contact} />
            })
          ) : (
            <p>Loading...</p>
          )}
          
      </div>
    </div>
  )
}

export default ContactsList;
