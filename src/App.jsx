import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
        token: ''
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
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}