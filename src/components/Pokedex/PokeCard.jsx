import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/pokeCard.css'
import { useNavigate } from "react-router-dom"

const PokeCard = ( {url} ) => {
    
    const [ pokemon, getPokemonById ] = useFetch(url)

    useEffect(() => {
        getPokemonById()
    }, [])

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.name}`)
    }

  return (
    <article onClick={handleClick} className={`pokemon border-${pokemon?.types[0].type.name}`}>
        <header className={`pokemon_header bg-${pokemon?.types[0].type.name}`}>
            <img className='pokemon_sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className='pokemon_body'>
            <h3 className={`pokemon_name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
            <ul className='pokemon_types'>
                {
                    pokemon?.types.map(objType => (
                        <li className='pokemon_type-specific' key={objType.type.url} >{objType.type.name}</li>
                    ))
                }
            </ul>
            <ul className='pokemon_stats'>
                {
                    pokemon?.stats.map(objStat => (
                        <li className='pokemon_stats-specific' key={objStat.stat.url}>
                            <span className='pokemon_stats-label'>{objStat.stat.name}</span>
                            <span className={`pokemon_stats-value color-${pokemon?.types[0].type.name}`}>{objStat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard