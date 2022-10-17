import './pokeCard.css'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({url}) => {
  
  const { data } = useFetch(url)
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/pokedex/${data?.id}`)
  }
  
  return (
    <div className='pokemon__card__content' onClick={handleClick}>
      <div className='card__header'>
        <div className='pokemon__image'>
          <img src={data?.sprites.other['official-artwork'].front_default}/>
        </div>
        <div className='card__header__info'>
          <h2 className='gradient__text'>{data?.name}</h2>
          <p>Type:</p>
          {
            data?.types.map((type) => (
              <h5 key={type.type.name}>{type.type.name}</h5>
            ))
          }
        </div>
      </div>
      <div className='card__body__content'>
        <div className='card__section__stats'>
          <div className='card__stats'>
            <h4>Height</h4>
            <span>{data?.height}</span>
          </div>
          <div className='card__stats'>
            <h4>Weight</h4>
            <span>{data?.weight}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokeCard