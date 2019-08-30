import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
// import axios from "axios";

const ContactsEdit = props => {
    console.log(props)
    const [contacts, setContacts] = useState({ first_name: "", last_name: "", phone: "" });


    const changeHandler = ev => {
        ev.persist();

        let value = ev.target.value;

        setContacts({
            ...contacts,
            [ev.target.name]: value
        });


    };


    const handleSubmit = e => {
        e.preventDefault();
        console.log("inside handlesubmit", contacts)
        const id = props.match.params.id;
        axiosWithAuth()
            .put(`https://random-ark-generator.herokuapp.com/api/contacts/${id}`, contacts)
            .then(res => {
                console.log("Inside Axios", res.data);
                props.history.push('/contacts');
              
                props.updatecontacts(res.data);

            })
            .catch(err => console.log(err.response));
    };

    return (
        <div className = "ContainerContact" >
  <div className = "contact-wrap">
    <h1> Contacts </h1> 
    </div>
            <div>
                <div className="editForm">
                    <h2>Update Contact</h2>
                    <form onSubmit={handleSubmit} className="FormContactEdit">
                        <input
                            type="text"
                            name="first_name"
                            className="input"
                            placeholder="First Name"
                            onChange={changeHandler}
                            value={contacts.first_name}
                        />
                        <input
                            type="text"
                            name="last_name"
                            className = "input"
                            placeholder="last Name"
                            onChange={changeHandler}
                            value={contacts.last_name}
                        />
                        <input
                            type="text"
                            name="phone"
                            className = "input"
                            placeholder="phone"
                            onChange={changeHandler}
                            value={contacts.phone}
                        />

                        <button type="submit" className="btnEdit">
                            Update Contact
                         </button>
                    </form>
                </div>


            </div>
        </div>

    );
}

export default ContactsEdit;