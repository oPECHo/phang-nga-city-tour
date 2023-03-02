import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const LogoutPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem('user')
        navigate('/home')
    })
    return (
        <div>
            <h1>Loading</h1>
        </div>
    )
}

export default LogoutPage