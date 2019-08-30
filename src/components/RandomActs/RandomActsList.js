import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Random.css';
import RandomActsCard from './RandomActsCard';





const RandomActsList = props => {
  const [acts, setActs] = useState({});


  useEffect(() => {
    axios.get('https://random-ark-generator.herokuapp.com/api/arks/')
    .then(res => {
      setActs(res.data)
    })
    .catch(err => console.log('Cannot get list', err));
  }, []);

 


   return (
 
          <div className="random-acts-container">
            <table className="tableRandom" >
              <tbody>
          {acts.length ? (
            acts.map(act => {
              return <RandomActsCard act={act}/>
          })
          ) : (
            <div>Loading...</div>
          )}
          </tbody>
          </table>
          </div>
          )
       }
       

 export default RandomActsList;