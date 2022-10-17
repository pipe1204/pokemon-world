import '../App.css'
import { useNavigate } from 'react-router-dom';

const PokedexForm = () => {

  const navigate = useNavigate()

  function submitPokemon(e) {
    e.preventDefault()
    console.log(e.target.pokemonName.value);
    navigate(`/pokedex/${e.target.pokemonName.value.trim().toLowerCase()}`)
  }

  return (
    <div className='main__div__form'>
      <form onSubmit={submitPokemon}>
        <div className='main__div__input'>
            <input type='text' id='pokemonName' placeholder='Pokemon Name'/>
            <button className='gradient__background'>Enter</button>
        </div>
      </form>
    </div>
  )
}

export default PokedexForm