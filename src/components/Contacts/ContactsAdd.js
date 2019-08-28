import React, { useState } from "react";
import axios from "axios";
import './Contacts.css';

const ContactsAdd = props => {
    const [Contacts, setContacts] = useState ({});


const changeHandler = event => {
    event.persist();
    let value = event.target.value;

    setContacts({
        ...contacts,
        [event.target.name]: value
    });
};

const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
        .post(`https://random-ark-generator.herokuapp.com/api/contacts/${user_id}`, contacts)
        .then(res => {
            setContacts({
                contacts: ''
            });
        })
        .catch(err => console.log(err.response))
};

  


return (

    <div>
   <form className="contactsForm" onSubmit= {handleSubmit}>
       <input type="text"
       className="inputContact"
       name="contact"
       placeholder="Add Contact"
       onChange={changeHandler}
       value={contacts.contact}
   />

   <button className="contactbtn" type="submit" >Add Contact </button>

   </form>
    </div>
  );

}

export default ContactsAdd;