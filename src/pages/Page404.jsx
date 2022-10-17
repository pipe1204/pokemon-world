import sad from '../assets/sad.png'
import '../App.css'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='page404__content'>
      <div className='page404__image'></div>
      <h1>404 Page not found</h1>
      <Link to={'/'} style={{color: 'white'}}>Back home</Link>
    </div>
  )
}

export default Page404