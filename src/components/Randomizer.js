import React, {useEffect, useState} from 'react';
import axiosWithAuth from "../utils/axiosWithAuth"
import { Random} from "../utils/Authentication";
import './Randomizer.css';



const Randomizer = () => {
         const [rancon, setRancon] = useState({});
         const [ranark, setRanark] = useState({})

         useEffect(() => {
            const id = localStorage.getItem('id')    
        
            axiosWithAuth().get(`https://random-ark-generator.herokuapp.com/api/contacts/${id}/random`)
              .then(res => {
                setRancon(res.data)
              })
              .catch(err => console.log('Contacts list not working ', err))
          }, []);

          useEffect(() => {        
            axiosWithAuth().get(`https://random-ark-generator.herokuapp.com/api/arks/random`)
              .then(res => {
                setRanark(res.data)
              })
              .catch(err => console.log('Contacts list not working ', err))
          }, []);
          console.log(rancon, ranark);

        // useEffect(() => {
        //     axios.get(`htps://random-ark-generator.herokuapp.com/api/contacts/random/${1}`)
        //         .then(res => {
        //             console.log(res.data);
        //             setActs(res.data)
        //         })
        //         .catch(err => console.log('Cannot get list', err));
        // }, []);

 
        return ( 

            <div className="mainCover">
                <div className="header">
                    <h2> Randomizer </h2>
                </div>
                <div className="boxInside">
                <p className="titleRandom">{ranark.ark}</p>
                <p className="titleRandom">For</p>
                <p className="titleRandom">{rancon.first_name} {rancon.last_name}</p>
                 {/* <button className = "btnRandomizer" > Completed </button> */}
                 < button className = "btnRandomizer" onClick={Random}> Randomize </button>
          
                </div>
               
                </div>
            )
        }

        export default Randomizer;