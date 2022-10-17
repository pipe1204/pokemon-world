import './App.css'
import {Routes, Route } from 'react-router-dom'
import PokemonHome from './pages/PokemonHome'
import Pokedex from './pages/Pokedex'
import PokemonId from './pages/PokemonId'
import PrivateRoute from './pages/PrivateRoute'
import Page404 from './pages/Page404'


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PokemonHome/>}/>

        <Route element={<PrivateRoute />}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokemonId />}/>
        </Route>

        <Route path='*' element={<Page404 />}/>

      </Routes>
    </div>
  )
}

export default App
