import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';




const People = () => {
    const [person, setPerson] = useState(); 

    const { inputId } = useParams();
    console.log()
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${inputId}`)
        .then(res => {
            console.log(res.data)
            setPerson(res.data)

        })
        .catch(() =>{
            console.error("DEAD")
        })
    }, [inputId])
    return (
        person ? (
            <div>
            <hr />
            <h1>About me</h1>
            <hr />
            <h2>Name: {person.name}</h2>
            <h3>Height: {person.height}</h3>
            <h3>Mass: {person.mass}</h3>
            <h3>Hair Color: {person.hair_color}</h3>
            <h3>Skin Color: {person.skin_color}</h3>
        </div>
            ) : <>"Loading.....</>
    )
}

export default People