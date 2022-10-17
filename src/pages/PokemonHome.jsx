import '../App.css'
import UserForm from '../components/UserForm'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const PokemonHome = () => {

  const ZoomInScrollOut = batch(Sticky(), FadeIn(), ZoomIn());

  return (
    <div>
      <div className='main__div__info'>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <div className='greeting__content'>
                <h1 className='gradient__text'>Do you like Pokemons?</h1>
                <p>Meet the incredible range of pokemons below 👇🏽</p>
              </div>
            </Animator>
          </ScrollPage>
        
          <ScrollPage>
            <Animator animation={ZoomInScrollOut}>
              <div className='main__div__info-form'>
                <div className='image__content'></div>
                <div className='greeting__content'>
                  <p>Let's start with your name</p>
                </div>
                <UserForm />
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </div>
  )
}

export default PokemonHome