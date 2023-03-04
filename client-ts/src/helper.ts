import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const storeUser = (data:any) => {
    localStorage.setItem(
        'user',
        JSON.stringify({
            username: data.user.username,
            email: data.user.email,
            admin: data.user.admin,
            jwt: data.jwt,
        })
    )
}

export const userData = () => {
    const stringfiedUser = localStorage.getItem('user') || ""
    if (stringfiedUser) {
        return JSON.parse(stringfiedUser)
    }
    return false
}

type Props = {
    children: JSX.Element
}

export const LoginRoute = ({children}: Props) => {
    const navigate = useNavigate()
    const data = userData()

    useEffect(() => {
        if (!data.jwt) {
            navigate('/login')
        }
    }, [])

    return children
}

export const ScrollToTop = () => {
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    
    return null
}