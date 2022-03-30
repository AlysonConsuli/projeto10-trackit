import { $Login } from "./style"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Login = () => {

    const [user, setUser] = useState({ email: '', password: '' })
    const { email, password } = user

    function Enter(e) {
        e.preventDefault()
        console.log(user)
        setUser({ ...user, email: '', password: '' })
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
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="senha"
                    onChange={e => setUser({ ...user, password: e.target.value })}
                    value={password}
                />
                <button type="submit">Entrar</button>
            </form>
            <Link to='/cadastro'>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </$Login>
    )
}