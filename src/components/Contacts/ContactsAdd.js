import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import './Contacts.css';

const ContactsAdd = props => {
    const [contact, setContact] = useState ({first_name: "", last_name: "", phone: ""});


const changeHandler = event => {
    event.persist();
    let value = event.target.value;

    setContact({
        ...contact,
        [event.target.name]: value
    });
};

const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
        .post(`https://random-ark-generator.herokuapp.com/api/contacts/`, contact)
        .then(res => {
            setContact({
                first_name: ''
            });
        })
        .catch(err => console.log(err.response))
};

return (

    <div>
    <div className = "contact-wrap">
    <h1> Contacts </h1> 
    </div> 
   <form className="contactsForm" onSubmit= {handleSubmit}>
   <input type="text"
    className="inputContact"
    name="first_name"
    placeholder="First Name"
    onChange={changeHandler}
    value={contact.first_name}
   />

<input type="text"
    className="inputContact"
    name="last_name"
    placeholder="Last Name"
    onChange={changeHandler}
    value={contact.last_name}
   />

<input type="text"
    className="inputContact"
    name="phone"
    placeholder="Phone Number"
    onChange={changeHandler}
    value={contact.phone}
   />

<button className="contactbtn" type="submit" >Add Contact </button> 
        </form>

    </div>    

);

}

export default ContactsAdd;