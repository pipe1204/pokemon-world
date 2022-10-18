import axios from 'axios'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
        axios.get(url)
        .then(res => {
            setData(res.data) 
            setLoading(false)
        })
        .catch(err => {
            setError(true)
            setData('')
            setLoading(false)
        })
    },[url])
    
    return { data, error, loading }
}

export default useFetch