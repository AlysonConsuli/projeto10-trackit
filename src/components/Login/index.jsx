import { $Login } from "./style"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export const Login = () => {

    const [user, setUser] = useState({ email: '', password: '' })
    const { email, password } = user
    
    const [disable, setDisable] = useState(false)

    const navigate = useNavigate()

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'

    function Enter(e) {
        e.preventDefault()
        setDisable(true)
        //console.log(user)

        const promise = axios.post(URL, user)

        promise.then(response => {
            const { data } = response
            console.log(data)

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

        //setUser({ ...user, email: '', password: '' })
    }

    return (
        <$Login>
            <form onSubmit={Enter}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="email"
                    onChange={e => setUser({ ...user, email: e.target.value })}
                    value={email}
                    disabled={disable}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="senha"
                    onChange={e => setUser({ ...user, password: e.target.value })}
                    value={password}
                    disabled={disable}
                />
                <button type="submit" disabled={disable}>Entrar</button>
            </form>
            <Link to='/cadastro'>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </$Login>
    )
}