import { useParams } from 'react-router-dom'
import '../App.css'
import useFetch from '../hooks/useFetch'
import { CgScrollV } from 'react-icons/cg'
import { BiArrowBack } from 'react-icons/bi'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Page404 from './Page404'
import Loading from '../components/Loading'


const PokemonId = () => {

  const { id } = useParams()

  const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}`

  const {data, error, loading} = useFetch(baseURL)
  console.log(data);
  console.log(error);

  const ZoomInScrollOut = batch(Sticky(), FadeIn(), ZoomIn(), MoveOut(0, -200)); 

  return (
    <div className='pokemon__page__main-content'>
    {
      error ? <Page404 />
      :
      <>
      {
        loading ? <Loading />
        :
        <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky())}>
            <div className='pokemon__page__main-header'>
              {/* <Link to='/pokedex'><BiArrowBack size={30} color={'#ffb88c'}/></Link> */}
              <img src={data?.sprites.other['official-artwork'].front_default}/>
              <h2 className='gradient__text'>{`#${data?.id}`}</h2>
              <h1 className='gradient__text'>{data?.name}</h1>
              <div className='scroll__content'>
                <CgScrollV size={45} color={'white'}/>
                <span>scroll</span>
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <div className='pokemon__page__main-header'>
              <div className='pokemon__primary__stats'>
                <div className='info__stats__content gradient__text'>
                  <h3>Weight</h3>
                  <h3>{data?.weight}</h3>
                </div>
                <div className='info__stats__content gradient__text'>
                  <h3>Height</h3>
                  <h3>{data?.height}</h3>
                </div>
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={batch(Fade(), Sticky())}>
            <div className='pokemon__page__main-header'>
              <h3 className='type'><span className='gradient__text'>Type</span> / Abilities</h3>
              <div className='pokemon__secondary__stats'>
                <div className='pokemon__type__content'>
                  {
                    data?.types.map((type) => {
                      return <h3 key={type.type.name} className='gradient__text'>{type.type.name}</h3>
                    })
                  }
                </div>
                <div className='pokemon__type__content'>
                  {
                    data?.abilities.map((ability) => {
                      return <h3 key={ability.ability.name}>{ability.ability.name}</h3>
                    })
                  }
                </div>
              </div>
              <div className='habilities__content'>

              </div>
            </div>
          </Animator>
        </ScrollPage>
              
        <div className='pokemon__page__main-header'>
          <h1 className='movements'>Movements</h1>
            <div className='movements__content'>
              {
                data?.moves.map((move) => {
                  return <span key={move.move.name} className='gradient__background'>{move.move.name}</span>
                    })
              }
            </div>
        </div>
        <ScrollPage>
          
        </ScrollPage>
      </ScrollContainer>
      }
      </>
    }
    </div>
  )
}

export default PokemonId