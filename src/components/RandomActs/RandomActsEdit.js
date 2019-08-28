import React, { useState, useEffect } from "react";
import axios from "axios";

import axiosWithAuth from "../../utils/axiosWithAuth";
import { Button, Icon, List } from 'semantic-ui-react';


const initialAct = {
    ark: '',
};

const ActsEdit= ({ props, acts, updateActs }) => {
    console.log("acts data from Random Acts List", acts);
    const [editing, setEditing] = useState(false);
    const [actToEdit, setActToEdit] = useState(initialAct);

  console.log("actToEdit", actToEdit);

    const editAct = ark => {
      setEditing(true);
      setActToEdit(ark);
    };



    // useEffect(() => {
    const saveEdit = event => {
        event.preventDefault();
        axiosWithAuth()
        .put(`https://random-ark-generator.herokuapp.com/api/arks/${actToEdit.id}`, actToEdit)
        .then(response => {
          console.log("saveEdit put request success", response.data)
          // setActToEdit(response.data);
          // props.history.push("/randomactslist");
        })
        .catch(error => console.log(error.response));
    };

// }, []);


const deleteAct = ark => {
    axiosWithAuth()
      .delete(`https://random-ark-generator.herokuapp.com/api/arks/${ark.id}`)
      .then(response => {
        console.log("deleteAct delete request success", response.data);
        updateActs(acts.filter(ark => ark.id !== ark.id));
        // props.history.push("/");
      })
      .catch(error => console.log(error.response));
  };




return (
    <div className="acts-edit-wrap">
      <p>acts</p>
      <ul>
        {acts.map(ark => (
          <li key={ark} onClick={() => editAct(ark)}>
            <span>
              <span className="delete" onClick={() => deleteAct(ark)}>
               Remove
              </span>{" "}
            </span>
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit act</legend>
         
            
            <input
              onChange={event =>
                setActToEdit({ ...actToEdit, ark: event.target.value })
              }
              value={actToEdit.ark}
            />
        
         
          <div className="buttonz">
            <button type="submit">save edit</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}

    </div>
  );
};
export default ActsEdit;


