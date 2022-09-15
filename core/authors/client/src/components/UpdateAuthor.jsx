import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateAuthor = (props) => {
    // STATE VARIABLES
    const { id } = useParams()
    const nav = useNavigate();
    const [name, setName] = useState('')
    // GETTING ONE from the api route
    useEffect(() => {   // useEFFECT HOOK me up
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => console.log("ERROR", err))
    }, [id]); // KEEPPING TRACK of the ID from the route (App.js)

    // UPDATED FORM AND SUBMIT
    const submitUpdateAuthor = (e) => {
        e.preventDefault(); // PREVENT RENDERING
        //udpate one by id from the route 
        axios.put(`http://localhost:8000/api/authors/${id}`, { name }) //{ name } sending the Object itself
            .then(res => {
                console.log(res.data)   //AXIOS (DATA formatted {obj} key data:)
                setName(res.data);
                nav('/')    //NAVIGATE to MAIN but i deafult it to replace to ROUTE /authors
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {JSON.stringify(name)} 
            <h1>Favorite authors</h1>
            <Link to="/authors" >Home</Link>
            <h4>update a author:</h4>
        
            <form onSubmit={submitUpdateAuthor}>
                <label>Name: </label> <br />
                <input type="text" value={name} onChange={e => setName(e.target.value)} /> <br />
                
                <Link to="/">Cancel</Link>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateAuthor;

