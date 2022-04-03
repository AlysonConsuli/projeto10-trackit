import { $Habit, Blocks, DayBox } from "./style"
import trash from "../../../assets/delete.svg"

export const Habit = ({ name, days, callbackDelete }) => {
    const letters = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return (
        <$Habit>
            <h3>{name}</h3>
            <Blocks>
                {letters.map((letter, i) => {
                    return (
                        <DayBox key={i} selected={days.includes(i) ? true : false}>
                            <span>{letter}</span>
                        </DayBox>
                    )
                })}
                <img src={trash} alt="deletar habito" onClick={(value) => {
                    if (window.confirm('Você está ok em apagar esse hábito?')) {
                        callbackDelete(value)
                    }
                }} />
            </Blocks>
        </$Habit>
    )
}