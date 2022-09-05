import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const getPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(response => setPokemons(response.data.results))
  }
  return (
    <>
      <div>
        <button onClick={() => { getPokemon() }}> Fetch Pokemon </button>
      </div>
      <div>
        {pokemons.length > 0 ? (<div>{pokemons.map((p, i) => <div key={i}>{p.name}</div>)}</div>) : <div>No Pokemon</div>}
      </div>
    </>
  )
}

export default Pokemon