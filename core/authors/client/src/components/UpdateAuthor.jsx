import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateAuthor = (props) => {
    // STATE VARIABLES
    const { id } = useParams()
    const nav = useNavigate();
    const [name, setName] = useState('')
    const [select, setSelect] = useState('');
    const [isChecked, setIsChecked] = useState();

    // GETTING ONE from the api route
    useEffect(() => {   // useEFFECT HOOK me up
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.name);
                setSelect(res.data.select);
                setIsChecked(res.data.isChecked);
            })
            .catch(err => console.log("ERROR", err))
    }, [id]); // KEEPPING TRACK of the ID from the route (App.js)

    // UPDATED FORM AND SUBMIT
    const submitUpdateAuthor = (e) => {
        e.preventDefault(); // PREVENT RENDERING
        //udpate one by id from the route 
        axios.put(`http://localhost:8000/api/authors/${id}`, { name, select, isChecked }) //{ name } sending the Object itself
            .then(res => {
                console.log(res.data)   //AXIOS (DATA formatted {obj} key data:)
                setName(res.data);
                setSelect(res.data);
                setIsChecked(res.data);
                nav('/')    //NAVIGATE to MAIN but i deafult it to replace to ROUTE /authors
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {JSON.stringify(name)} 
            {JSON.stringify(select)}
            {JSON.stringify(isChecked?"yes":"no")}
            <h1>Favorite authors</h1>
            <Link to="/authors" >Home</Link>
            <h4>update a author:</h4>
        
            <form onSubmit={submitUpdateAuthor}>
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

export default UpdateAuthor;

