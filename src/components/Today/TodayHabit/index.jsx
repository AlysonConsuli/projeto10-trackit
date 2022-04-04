import { $TodayHabit } from "./style"
import check from "../../../assets/check.svg"
import { useContext, useState } from "react"
import { UserContext } from "../../../contexts/UserContext"
import axios from "axios"

export const TodayHabit = ({ name, currentSequence, highestSequence,
    habitId, done, todayHabits, setTodayHabits }) => {

    const [status, setStatus] = useState(done)
    const [disable, setDisable] = useState(false)

    const { user } = useContext(UserContext)

    function toggleCheck() {
        const config = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        if (!status) {
            setTodayHabits([...todayHabits].map(habit => {
                if (habit.id === habitId &&
                    habit.currentSequence >= habit.highestSequence) {
                    return {
                        ...habit,
                        done: true,
                        currentSequence: currentSequence + 1,
                        highestSequence: currentSequence + 1
                    }
                }
                if (habit.id === habitId &&
                    habit.currentSequence < habit.highestSequence) {
                    return {
                        ...habit,
                        done: true,
                        currentSequence: currentSequence + 1
                    }
                }
                if (habit.id !== habitId) {
                    return { ...habit }
                }
            }))
            const promise = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`,
                {}, config
            )
            promise.then((response) => {
                setDisable(false)
            })
            promise.catch(({ response }) => {
                console.log(response)
                setDisable(false)
            })
        } else {
            setTodayHabits([...todayHabits].map(habit => {

                if (habit.id === habitId &&
                    habit.currentSequence === habit.highestSequence) {
                    return {
                        ...habit,
                        done: false,
                        currentSequence: currentSequence - 1,
                        highestSequence: currentSequence - 1
                    }
                }
                if (habit.id === habitId &&
                    habit.currentSequence !== habit.highestSequence) {
                    return {
                        ...habit,
                        done: false,
                        currentSequence: currentSequence - 1
                    }
                }
                if (habit.id !== habitId) {
                    return { ...habit }
                }
            }))
            const promise = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`,
                {}, config
            )
            promise.then((response) => {
                setDisable(false)
            })
            promise.catch(({ response }) => {
                console.log(response)
                setDisable(false)
            })
        }
    }

    return (
        <$TodayHabit done={done} status={status}>
            <h3>{name}</h3>
            <div>
                <span>Sequência atual: <strong>{currentSequence} dias</strong></span><br />
                {currentSequence === highestSequence ?
                    <span>Seu recorde: <strong>{highestSequence} dias</strong></span>
                    :
                    <span>Seu recorde: {highestSequence} dias</span>
                }
            </div>
            <button type="button" disabled={disable} onClick={() => {
                setDisable(true)
                toggleCheck()
                setStatus(!status)
            }}>
                <img src={check} alt="check" />
            </button>
        </$TodayHabit>
    )
}