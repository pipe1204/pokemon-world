import '../App.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../store/slices/userName.slice'
import { useEffect } from 'react'

const UserForm = () => {
    const {handleSubmit, register, setFocus} = useForm()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
      setFocus('userName')
    },[setFocus])

    function submitName(data) {
      const name = data.userName.trim()
      dispatch(setUserNameGlobal(name))
      navigate('/pokedex')
    }

  return (
    <div className='main__div__form'>
      <form onSubmit={handleSubmit(submitName)}>
        <div className='main__div__input'>
            <input type='text' id='userName' placeholder='Your name here'{...register('userName')}/>
            <button className='gradient__background'>Enter</button>
        </div>
      </form>
    </div>
  )
}

export default UserForm