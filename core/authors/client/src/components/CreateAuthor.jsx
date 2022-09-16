import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreateAuthor = (props) => {
    // STATE VARIABLES
    const nav = useNavigate();
    const [name, setName] = useState('');
    const [select, setSelect] = useState('str');
    const [isChecked, setIsChecked] = useState(false);
    // DATABASE ERRORS
    const [errors, setErrors] = useState([]); 
    // SUBMIT FORM
    const submitAuthor = (e) => {
        e.preventDefault();
        // CREATE form and route to the server
        axios.post("http://localhost:8000/api/authors", { name, select, isChecked}) //{ name } sending the Object itself
            .then(res => {
                console.log("✅✅✅✅✅✅✅✅✅ Author created SUCCESSS");
                console.log(res.data);  //AXIOS (DATA formatted {obj} key data:)
                setName(res.data)   
                setSelect(res.data)   
                setIsChecked(res.data)   
                nav('/')    //NAVIGATE to MAIN but i deafult, replace to ROUTE (/authors)
            })
            .catch(err => {
                console.log("❌❌❌❌❌❌❌❌❌ Author Submit FAILED")
                // console.log(err.response.data)  //this is where its coming from. WE CREATED err: from AXIOS-client
                console.log(err)
                // --------- COPIED FROM THE PLATFORM   ⬇️ input from our created key err:
                const errorResponse = err.response.data.err.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                // _______________________________________________________________________
            })
    };
    return (
        <div>
            {/* {JSON.stringify(name)} <br />
            {JSON.stringify(errors)}  */}
            {/* MAP over all errors if !filled */}
            {errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
            <h1>Favorite authors</h1>
            <Link to="/">Home</Link>
            <h4>add a new author:</h4>
            <form onSubmit={submitAuthor}>
                <label>Name: 
                    <input type="text" value={name} onChange={e => setName(e.target.value)} /> <br />
                </label> <br />
                <label>Select: </label>
                    <select value={select} onChange={e => setSelect(e.target.value)}> 
                        <option value='str'>STR</option>
                        <option value='bol'>BOL</option>
                        <option value='obj'>OBJ</option>
                        <option value='arr'>ARR</option>
                    </select>
                    <br />
                <label>Check: 
                    <input type="checkbox" value={isChecked} checked={isChecked} onChange={e => setIsChecked(e.target.checked)}/> <br />
                </label> <br />
                <Link to="/">Cancel</Link>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateAuthor;































//style={{ padding: "1px 5px", textDecoration: "none", backgroundColor: "#E3E3E3", border: ".2px solid black", borderRadius: "5px", color: "black" }} 