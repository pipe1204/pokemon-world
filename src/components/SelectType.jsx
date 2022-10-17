import '../App.css'
import useFetch from '../hooks/useFetch'

const SelectType = ({setTypeData}) => {

const baseURL = 'https://pokeapi.co/api/v2/type'

  const {data} = useFetch(baseURL)

  function handleChange(e) {
    setTypeData(e.target.value)
  }

  return (
    <select className='select__type' onChange={handleChange}>
        <option value='All Pokemons'>All Pokemons</option>
          {
            data?.results.map((type) => (
              <option key={type.name} value={type.url}>{type.name}</option>
            ))
          }
    </select>
  )
}

export default SelectType