import { $Habit, DayBox } from "./style"

export const Habit = ({ name, days }) => {

    const letters = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return (
        <$Habit>
            <span>{name}</span>
            <div>
                {letters.map((letter, i) => {
                    return (
                        <DayBox selected={days.includes(i) ? true : false }>
                            <span>{letter}</span>
                        </DayBox>
                    )
                })}
            </div>
        </$Habit>
    )
}