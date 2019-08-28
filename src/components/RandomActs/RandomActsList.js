import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Random.css';
import RandomActsCard from './RandomActsCard';

import RandomActsEdit from "./RandomActsEdit";
import RandomActsDelete from "./RandomActsDelete";



const RandomActsList = props => {
  const [acts, setActs] = useState([]);
  console.log(acts);

  useEffect(() => {
    axios.get('https://random-ark-generator.herokuapp.com/api/arks/')
    .then(res => {
      console.log(res.data);
      setActs(res.data)
    })
    .catch(err => console.log('Cannot get list', err));
  }, []);


  return (
    <div className='random-cards'>
      {acts.length ? (
        acts.map(randomActs => {
        return <RandomActsCard ark={randomActs} />;
      })
    
      ) : (
        <p>Loading...</p>
      )}
      <div>
        <RandomActsDelete acts={acts} deleteActs={setActs} />
        <RandomActsEdit acts={acts} updateActs={setActs} />
      </div> 
    </div>
  )
}

export default RandomActsList;