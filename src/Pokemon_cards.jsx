import React from 'react'

const Pokemon_cards = ({pokemonData}) => {
    // console.log(pokemonData);
    
  return (
    <div>
      <li className='pokemon-card'>
        <figure>
            <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} className='pokemon-image' />
        </figure>
        <h1 className='pokemon-name'>{pokemonData.name}</h1>
        {/* <button>{pokemonData.types[0].type.name}</button> */}
        <div className="pokemon-info pokemon-highlight">
            <p>
                {
                    pokemonData.types.map((curType)=> curType.type.name).join(", ")
                }
            </p>
        </div>

        <div className="grid-three-cols">
            <p className="pokemon-info">
                Height : <span>{pokemonData.height} </span>
            </p>
            <p className="pokemon-info">
                Weight : <span>{pokemonData.weight}</span>
            </p>
            <p className="pokemon-info">
               Speed : <span>{pokemonData.stats[5].base_stat} </span>
            </p>
        </div>

        <div className="grid-three-cols">
          <p className="pokemon-info">
            Experience : <span>{pokemonData.base_experience}</span>
          </p>
          <p className="pokemon-info">
            Attack : <span>{pokemonData.stats[1].base_stat}</span>
          </p>
          <p className="pokemon-info">
            Abilities : <span>{pokemonData.abilities[0].ability.name}</span>
          </p>
        </div>
      </li>
    </div>
  )
}

export default Pokemon_cards
