import { $Login, AutoLogin } from "./style"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"
import logo from "../../assets/logo.png"

export const Login = () => {
    const [userLogin, setUserLogin] = useState({ email: '', password: '' })
    const [disable, setDisable] = useState(false)
    const { user, setUser } = useContext(UserContext)

    const navigate = useNavigate()
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'

    function Enter(e) {
        e.preventDefault()
        setDisable(true)

        const promise = axios.post(URL, userLogin)
        promise.then(response => {
            const { data } = response
            const { name, email, password, image, token } = data
            setUser({ ...user, name, email, password, image, token })

            const infosSerialized = JSON.stringify(data)
            localStorage.setItem("user", infosSerialized)

            navigate('/hoje')
        })
        promise.catch(err => {
            console.log(err.response)
            if (!err.response.data.details) {
                alert(err.response.data.message)
            } else {
                alert(err.response.data.details[0])
            }
            setDisable(false)
        })
    }

    if (user.token.length !== 0) {
        const promise = axios.post(URL, {
            email: user.email,
            password: user.password
        })
        promise.then(response => navigate('/hoje'))
        promise.catch(err => console.log(err.response))

        return (
            <AutoLogin>
                <h1>Logando...</h1>
                <ThreeDots color="#52B6FF" height={80} width={80} />
            </AutoLogin>
        )
    }

    return (
        <$Login>
            <img src={logo} alt="logo" />
            <h1>TrackIt</h1>
            <form onSubmit={Enter}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="email"
                    onChange={e => setUserLogin({ ...userLogin, email: e.target.value })}
                    value={userLogin.email}
                    disabled={disable}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="senha"
                    onChange={e => setUserLogin({ ...userLogin, password: e.target.value })}
                    value={userLogin.password}
                    disabled={disable}
                />
                <button type="submit" disabled={disable}>
                    {disable ? <ThreeDots color="#FFFFFF" height='51' width='51' ariaLabel='loading' /> : 'Entrar'}
                </button>
            </form>
            <Link to='/cadastro'>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </$Login>
    )
}