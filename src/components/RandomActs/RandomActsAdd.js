import React, {
    useState
} from "react";
import axiosWithAuth from "../../utils/axiosWithAuth"
import './Random.css';

const RandomActsAdd = props => {
    const [arks, setArks] = useState({});



    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;

        setArks({
            ...arks,
            [ev.target.name]: value
        });
    };



    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(`https://random-ark-generator.herokuapp.com/api/arks`, arks)
            .then(res => {
                console.log("insideAuth", res.data)


            })
            .catch(err => console.log(err.response));
    };

    return ( 
    
    <div >
        <div className='ideas'>
            <h2>Ideas</h2>
        </div>
        <form className="formRandom" onSubmit = {handleSubmit}>
        <input type="text"
        className="inputRandom"
        name="ark"
        placeholder="Add An Act"
        onChange={changeHandler}
        value={arks.ark}
        /> 
        
        <button className="btnRandom" type="submit" >Add Act </button> 
        </form> </div>

    );
}

export default RandomActsAdd;