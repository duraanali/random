import React, { useState} from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

const RandomActsEdit = props => {

    console.log(props);
    
    const[acts, setActs] = useState({ark:""})

    const changeHandler = ev => {
      ev.persist();

      let value =ev.target.value;

      setActs({
        ...acts,
        [ev.target.name]: value
      });
    };

    const handleSubmit = e => {
      e.preventDefault();
      const id = props.match.params.id;
      axiosWithAuth()
          .put(`https://random-ark-generator.herokuapp.com/api/arks/${id}`, acts)
          .then(res => {
            props.history.push('/ideas');
          })
    };

    return (
      <div className="ActConatiner">
        <h1>Edit Act</h1>
        <form onSubmit={handleSubmit} className="FormActEdit">
        <input
                            type="text"
                            name="ark"
                            className="input"
                            placeholder="edit act"
                            onChange={changeHandler}
                            value={acts.ark}
                        />
                        <button type="submit" className="btnEdit">Update Act</button>
        </form>

      </div>
    )

  
};
export default RandomActsEdit;


