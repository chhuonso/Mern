import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const Main = (props) => {
    // STATE VARIABLES
    const [authors, setAuthors] = useState([])
    const nav = useNavigate();
    // useEFFECT HOOk me up
    useEffect(() => {
        // AXIOS is getting from the ROUTE from the APi
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data);
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    // go UPDATE route with that id
    const goUpdate = (updateID) => {
        console.log(updateID);
        nav(`/authors/update/${updateID}`)
    }
    // go DELETE route with that id
    const deleteAuthor = (deleteID) => {
        console.log(deleteID)
        // VANILLA JS CHEAT FOR A POPUP to confirm CANCEL or OK
        // React way is to use a modal
        if(window.confirm("ARE YOU SURE?")){
            axios.delete(`http://localhost:8000/api/authors/${deleteID}`)
            .then(res => {
                console.log(res.data)
                console.log("DELETE SUCCESS!")
                // remove from the DOM after a SUCCESSFUL delete
                setAuthors(authors.filter((author) => author._id !== deleteID))
            })
            .catch(err => console.log(err))
        }
    }
    return (
        <>
            <h1>Favorite authors</h1>
            <Link to='/authors/new'>Add an author</Link>
            <hr />
            <div>
                {/* {JSON.stringify(authors[0]._id)} */}
                <h4>We have quotes by:</h4>
                <table>
                    <tr >
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                    {
                        authors.map((author) => {
                            return (
                                <>
                                    <tr >
                                        <td key={author._id}>{author.name}</td>
                                        <td>
                                            <button onClick={() => goUpdate(author._id)}>Edit</button>
                                            <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                                        </td>
                                    </tr>
                                </> 
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default Main;