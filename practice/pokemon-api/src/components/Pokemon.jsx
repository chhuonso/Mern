import React from 'react'
// import { useEffect } from 'react';
import { useState } from 'react';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => response.json() )
            .then(response => setPokemon(response.results))
    }

  return (
   <>
    <div>
        <button onClick={() => { getPokemon() }}> Fetch Pokemon </button>
    </div>
    <div>
    {pokemon.length > 0 ? (<div>{pokemon.map((p, i) => <div key={i}>{p.name}</div>)}</div>) : <div>No Pokemon</div>}
    </div>
   </>
  )
}

export default Pokemon