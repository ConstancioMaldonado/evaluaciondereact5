import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'

const Pokedex = () => {

  const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

  const [formUrl, setFormUrl] = useState(urlBase)

    const { trainerName } = useSelector(state => state)

  return (
    <div>
        <h1>Pokedex</h1>
        <p><span>Welcome {trainerName}</span></p>
        <FormPoke url={urlBase} setFormUrl={setFormUrl} />
        <PokeContainer formUrl={formUrl} />
    </div>
  )
}

export default Pokedex