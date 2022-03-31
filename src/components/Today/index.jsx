import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { $Today } from "./style"

export const Today = () => {

    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <$Today>
            Hoje
        </$Today>
    )
}