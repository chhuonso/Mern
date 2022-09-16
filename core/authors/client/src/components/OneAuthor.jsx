import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

const OneAuthor = (props) => {

    const { id } = useParams();
    const [author, setAuthor] = useState({});


    useEffect(() => {
        // AXIOS is getting from the ROUTE from the APi
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data);
                setAuthor(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {/* {JSON.stringify(author.isChecked? "yes":"no")} */}
            <Link to={'/'}>Home</Link>
            <h1>{author.name}</h1>
            <h2>{author.select}</h2>
            <h2>{author.isChecked ? "YES" : "NO"}</h2>
        </div>
    )
}

export default OneAuthor