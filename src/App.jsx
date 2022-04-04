import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Habits } from './components/Habits'
import { Historic } from './components/Historic'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp'
import { Today } from './components/Today'
import { UserContext } from './contexts/UserContext'
import { GlobalStyle } from './style'

export const App = () => {
    let token = ''
    let image = ''
    let email = ''
    let password = ''
    let name = ''

    const infosString = localStorage.getItem("user")
    if (infosString) {
        const infos = JSON.parse(infosString)
        token = infos.token
        image = infos.image
        email = infos.email
        password = infos.password
        name = infos.name
    }

    const [user, setUser] = useState({
        name,
        email,
        password,
        image,
        token,
        percentage: 0
    })

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={{ user, setUser }}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/cadastro' element={<SignUp />} />
                        <Route path='/hoje' element={<Today />} />
                        <Route path='/habitos' element={<Habits />} />
                        <Route path='/historico' element={<Historic />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}