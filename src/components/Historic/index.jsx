import { Footer } from "../Footer"
import { Header } from "../Header"
import { $Historic } from "./style"

export const Historic = () => {
    return (
        <>
            <Header />
            <$Historic>
                <h1>Histórico</h1>
                <main>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </main >
            </$Historic >
            <Footer />
        </>
    )
}