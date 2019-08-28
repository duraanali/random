import React, { useState, useEffect } from "react";
import axios from "axios";

import axiosWithAuth from "../../utils/axiosWithAuth";
import { Button, Icon, List, Image } from 'semantic-ui-react';

const initialAct = {
    ark: '',
};

const ActsDelete = ({ props, acts, deleteActs }) => {
    console.log("acts data from Random Acts List", acts);
    const [deleting, setDeleting] = useState(false);
    const [actToDelete, setActToDelete] = useState(initialAct);

  console.log("actToDelete", actToDelete);

    const deleteAct = ark => {
    console.log("ark", ark)
      setDeleting(true);
      setActToDelete(ark);
    };


const saveDelete = ark => {
    axiosWithAuth()
      .delete(`https://random-ark-generator.herokuapp.com/api/arks/${ark.id}`)
      .then(response => {
        console.log("deleteAct delete request success", response.data);
        deleteActs(acts.filter(ark => ark.id !== ark.id));
        // props.history.push("/ideas");
      })
      .catch(error => console.log(error.response));
  };

//   useEffect(() => {
//     saveDelete();
//   }, []);

return (
    <div className="acts-delete-wrap">
      <ul>
        {acts.map(ark => (
          <div key={ark.ark} onClick={() => deleteAct(ark)}>
            <span>
              <span className="delete" onClick={() => saveDelete(ark)}>
              <Icon className="delete-icon" name="delete" />
              </span>{" "}
            </span>
          </div>
        ))}
      </ul>

    </div>
  );
};
export default ActsDelete;


