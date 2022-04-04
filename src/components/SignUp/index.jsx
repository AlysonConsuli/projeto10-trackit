import { $SignUp } from "./style"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"
import logo from "../../assets/logo.png"

export const SignUp = () => {
    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        name: '',
        image: ''
    })
    const { email, password, name, image } = newUser
    const [disable, setDisable] = useState(false)

    const navigate = useNavigate()
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'

    function Register(e) {
        e.preventDefault()
        setDisable(true)

        const promise = axios.post(URL, newUser)
        promise.then(resp => { navigate('/') })
        promise.catch(err => {
            if (!err.response.data.details) {
                alert(err.response.data.message)
            } else {
                alert(err.response.data.details[0])
            }
            setDisable(false)
        })
    }

    return (
        <$SignUp>
            <img src={logo} alt="logo" />
            <h1>TrackIt</h1>
            <form onSubmit={Register}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="email"
                    onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                    value={email}
                    disabled={disable}
                    autoComplete="off"
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="senha"
                    onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                    value={password}
                    disabled={disable}
                    autoComplete="off"
                />
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="nome"
                    onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                    value={name}
                    disabled={disable}
                    autoComplete="off"
                />
                <input
                    type="url"
                    name="imagem"
                    id="imagem"
                    required
                    placeholder="foto"
                    onChange={e => setNewUser({ ...newUser, image: e.target.value })}
                    value={image}
                    disabled={disable}
                    autoComplete="off"
                />
                <button type="submit" disabled={disable}>
                    {disable ? <ThreeDots color="#FFFFFF" height='51' width='51' ariaLabel='loading' /> : 'Cadastrar'}
                </button>
            </form>
            <Link to='/'>
                <span>Já tem uma conta? Faça login!</span>
            </Link>
        </$SignUp>
    )
}