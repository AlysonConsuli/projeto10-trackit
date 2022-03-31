import { Footer } from "../Footer"
import { Header } from "../Header"
import { $Historic } from "./style"

export const Historic = () => {
    return (
        <$Historic>
            <Header/>
            <h1>Histórico</h1>
            <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
            <Footer/>
        </$Historic>
    )
}