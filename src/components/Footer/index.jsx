import { $Footer } from "./style"
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Footer = () => {
    const { user } = useContext(UserContext)

    return (
        <$Footer>
            <Link to='/habitos'>
                <span>Hábitos</span>
            </Link>
            <div>
                <Link to='/hoje'>
                    <CircularProgressbar
                        value={user.percentage}
                        text='Hoje'
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </Link>
            </div>
            <Link to='/historico'>
                <span>Histórico</span>
            </Link>
        </$Footer>
    )
}