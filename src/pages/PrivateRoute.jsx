import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {

    const userName = useSelector(state => state.user)

    if (userName) {
        return <Outlet />    
    } else {
        return <Navigate to='/'/>
    }
}
export default PrivateRoute