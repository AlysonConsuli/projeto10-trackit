import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { $Today } from "./style"

export const Today = () => {

    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <>
            <Header />
            <$Today>
                <h1>Hoje</h1>
            </$Today>
            <Footer />
        </>
    )
}