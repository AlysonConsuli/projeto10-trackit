import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Habits } from './components/Habits'
import { Historic } from './components/Historic'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp'
import { Today } from './components/Today'
import { UserContext } from './contexts/UserContext'
import { GlobalStyle } from './style'

export const App = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        image: '',
        token: '',
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