import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [select, setSelect] = useState("people");
    const [inputId, setInputId] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${select.toLocaleLowerCase()}/${inputId}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for:</label>
                <select onChange={e => setSelect(e.target.value)} value={select}>
                    <option>People</option>
                    <option>Planets</option>
                </select>
                <label> ID: </label>
                <input type="number" min={1} onChange={e => setInputId(e.target.value)} value={inputId} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form