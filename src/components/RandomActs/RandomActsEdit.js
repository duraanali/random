import React, { useState, useEffect } from "react";
import axios from "axios";

import axiosWithAuth from "../../utils/axiosWithAuth";
import { Button, Icon, List } from 'semantic-ui-react';

const initialAct = {
    ark: '',
};

const ActsEdit = ({ props, acts, updateActs }) => {
    console.log("acts data from Random Acts List", acts);
    const [editing, setEditing] = useState(false);
    const [actToEdit, setActToEdit] = useState(initialAct);

  console.log("actToEdit", actToEdit);

    const editAct = ark => {
      setEditing(true);
      setActToEdit(ark);
    };

    const saveEdit = event => {
        // event.preventDefault();
        axiosWithAuth()
        .put(`https://random-ark-generator.herokuapp.com/api/arks/${actToEdit.id}`, actToEdit)
        .then(response => {
          console.log("saveEdit put request success", response.data)
          setActToEdit(response.data);
          // props.history.push("/ideas");
        })
        .catch(error => console.log(error.response));
    };

    useEffect(() => {
      saveEdit();
    }, []);


return (
  <div className="acts-edit-wrap">
  <ul>
    {acts.map(ark => (
      <div key={ark.ark} onClick={() => editAct(ark)}>
          <div className="edit" onClick={() => saveEdit(ark)}>
          <Icon className="edit-icon" name="edit" />
        </div>
      </div>
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


