import React from "react";
import './Random.css';
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Link } from 'react-router-dom';


export default function RandomActsCard(props) {
  
  const {ark} = props.act;
  console.log("delete ID", props.act.id)

  const handleSubmit = () => {

    const id = props.act.id
    axiosWithAuth().delete(`https://random-ark-generator.herokuapp.com/api/arks/${id}`)
      .then(res => {

        console.log(res.data);

      })
  }


  return (
   
        
            < tr className = "listRandom" >
               <td>  <h2>{ark}</h2></td>
           
            <td><div className="buttons" >

            <button className="edit-button" type="submit">
              <Link to={`/updateact/${props.act.id}`} className="update-button" act={props.act}>Edit</Link>
            </button>
            <button className="delete-button" type="submit" onClick={() => handleSubmit()}> 
        Delete 
        </button>
 
            </div>
</td>
 </tr>
   

         
      
  )
}




