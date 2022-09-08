import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planets = () => {

    const [planet, setPlanet] = useState(); 


    const { inputId } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${inputId}`)
        .then(res => {
            console.log(res.data)
            setPlanet(res.data)
        })
        .catch((err) =>{
            console.error("DEAD" + err)
        })
    }, [inputId])
    return (
        planet ? (
        <>
            <hr />
            <h1>Planet</h1>
            <hr />
            <h2>Name: {planet.name}</h2>
            <h3>Climate: {planet.climate}</h3>
            <h3>Terrain: {planet.terrain}</h3>
            <h3>Surface Water: {planet.surface_water}</h3>
            <h3>Population: {planet.population}</h3>
        </>
        ) : <>"Loading......</>
)}

export default Planets