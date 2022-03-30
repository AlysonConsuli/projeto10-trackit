import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp'
import { Today } from './components/Today'
import { GlobalStyle } from './style'

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>} />
                    <Route path='/cadastro' element={<SignUp/>} />
                    <Route path='/hoje' element={<Today/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}