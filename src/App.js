import Tarjeta from './Components/Tarjeta'
import './App.css';
import { useEffect, useState } from 'react';


function App() {


  const [allPoke, setAllPoke] = useState([])
  const [cargarMas, setCargar] = useState('https://pokeapi.co/api/v2/pokemon/?limit=151')

  const obtenPokemon = async () => {
    const res = await fetch(cargarMas)
    const data = await res.json()

    setCargar(data.next)

    function creaPoke (result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        await setAllPoke(currentList => [...currentList, data])
        await allPoke.sort((a, b) => a.id - b.id)

      })
    }
    
    creaPoke(data.results)
  }

  useEffect(() => {
    obtenPokemon()
  }, [])



  return (
  
    <div className="app-container">
      <h1>Pokedex</h1>
      <div className="poke-container">
        <div className="all-poke">
          {allPoke.map((pokemon, index) => 
            <Tarjeta 
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              img={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name}
            />
          )}
        </div>
        <button className="boton">Cargar</button>
      </div>
    </div>  
  )

    }


export default App;
