import React, { useEffect, useState } from 'react'
import './Pokemon.css'
import Pokemon_cards from './Pokemon_cards';

const Pokemon = () => {
  const [pokemon,setPokemon]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");
  const [search,setSearch]=useState("");
  const API = "https://pokeapi.co/api/v2/pokemon/?limit=124";
  const fetchPokemon =async()=>{
    try{
      const res = await fetch(API,{
        headers:{
          Accepts:'application/json',
        }
      });
      const data = await res.json();
      // console.log(data);
      
      const detailedPokemonData = data.results.map(async(curPokemon)=>{
        // console.log(curPokemon.url);
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        // console.log(data);
        return data;
        
      })
      // console.log(detailedPokemonData);
      const detailedResponses =await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
      setPokemon(detailedResponses)
      setLoading(false);
      
    }catch(error){
      // console.log(error.message);
      setError(error);
      setLoading(false);
      
    }
  }
  useEffect(()=>{
    fetchPokemon();
  },[])


  // search functionality

  const searchData = pokemon.filter((curPokemon)=>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  )

  if(loading){
    return(
      <div>
        <h1>Loading.......</h1>
      </div>
    )
  }

  if(error){
    return(
      <div>
        <h1>Error : {error.message}</h1>
      </div>
    )
  }
  return (
    <div className='container'>
      <header>
        <h1>Lets catch Pokèmon</h1>
      </header>
      <div className="pokemon-search">
        <input type="text" placeholder='Search pokemon' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </div>
      <div>
        <ul className="cards">
          {
            searchData.map((curPokemon)=>{
              return (<Pokemon_cards key={curPokemon.id} pokemonData={curPokemon}/>)
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Pokemon
