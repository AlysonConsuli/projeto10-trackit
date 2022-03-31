import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { $Header } from "./style"

export const Header = () => {

    const { user } = useContext(UserContext)

    return (
        <$Header>
            <h1>TrackIt</h1>
            <img src={user.image} alt={user.name} />
        </$Header>
    )
}