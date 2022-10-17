import '../App.css'
import { useSelector } from 'react-redux'
import PokedexForm from '../components/PokedexForm'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/PokeCard'
import SelectType from '../components/SelectType'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Pokedex = () => {

  const [allPokemons, setAllPokemons] = useState()
  const [typeData, setTypeData] = useState("All Pokemons")
  const [pokemonData, setPokemonData] = useState()
  const [isType, setIsType] = useState(true)
  const [current, setCurrent] = useState(0)

  const userName = useSelector(state => state.user)

  let baseURL = 'https://pokeapi.co/api/v2/pokemon/?limit=1500'  
  

  const {data} = useFetch(baseURL)

  useEffect(() => {
    setAllPokemons(data?.results)
  },[data, current])

  useEffect(() => {
    if(typeData !== "All Pokemons") {
      axios.get(typeData)
      .then(res => setPokemonData(res.data.pokemon))
      setIsType(false)
    } else {
      setIsType(true)
    }
   
  },[typeData, current])

  useEffect(() => {
    setCurrent(0)
  },[typeData])

  function handleNextPage() {
    if((current + 20 >= pokemonData?.length) || (current + 20 >= allPokemons?.length)) {
    } else {
      setCurrent( current + 20)
    }
  }

  function handlePreviousPage() {
    setCurrent( current - 20)
  }

  console.log(pokemonData?.length);
  console.log(current);
 
  return (
    <div className='pokedex__main__content'>
      <div className='pokedex__info__content'>
        <h1>Welcome <span className='gradient__text'>{userName}!</span></h1>
        <p>Find your favorite pokemon</p>
      </div>
      <div className='pokedex__form__content'>
        <PokedexForm />
        <SelectType setTypeData={setTypeData}/>
      </div>
      <div className='pokedex__pokemon__content scale-up-center'>
        {
          isType 
          ? 
          allPokemons?.slice(current, current + 20).map((pokemon) => {
            return <PokeCard key={pokemon.name} url={pokemon.url}/>
          })
          :
          pokemonData?.slice(current, current + 20).map((pokemon) => {
            return <PokeCard key={pokemon.pokemon.name} url={pokemon.pokemon.url}/>
          })
        }
      </div>
      <div className='page__buttons'>
        {
          current ? 
          <>
          <button className='gradient__background' onClick={handlePreviousPage}>Previous</button>
          <button className='gradient__background' onClick={handleNextPage}>Next</button>
          </>
          :
          <button className='gradient__background' onClick={handleNextPage}>Next</button>
        }
      </div>
    </div>
  )

}

export default Pokedex