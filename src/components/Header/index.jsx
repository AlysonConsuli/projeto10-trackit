import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { $Header } from "./style"

export const Header = () => {

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    function logOut() {
        if (window.confirm(`${user.name}, você quer mesmo deslogar?`)) {
            localStorage.clear()
            setUser({...user, token: ''})
            navigate('/')
        }
    }

    return (
        <$Header>
            <h1>TrackIt</h1>
            <img src={user.image} alt={user.name} onClick={logOut} />
        </$Header>
    )
}