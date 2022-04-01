import { $TodayHabit } from "./style"
import check from "../../../assets/check.svg"
import { useContext, useState } from "react"
import { UserContext } from "../../../contexts/UserContext"
import axios from "axios"

export const TodayHabit = ({ name, currentSequence, highestSequence, habitId, done, todayHabits }) => {

    const { user, setUser } = useContext(UserContext)
    const [status, setStatus] = useState(done)

    function toggleCheck() {
        const config = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
        if (!status) {
            const promise = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`,
                {}, config
            )
            promise.then(({ data }) => {
                console.log('mark')
                setUser({ ...user, percentage: 100 })
            })
            promise.catch(({ response }) => console.log(response))
        } else {
            const promise = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`,
                {}, config
            )
            promise.then(({ data }) => {
                console.log('remove')
                setUser({ ...user, percentage: 50 })
            })
            promise.catch(({ response }) => console.log(response))
        }
    }

    return (
        <$TodayHabit done={status}>
            <h2>{name}</h2>
            <div>
                <span>Sequência atual: {currentSequence} dias</span> <br />
                <span>Seu recorde: {highestSequence} dias</span>
            </div>
            <button onClick={() => {
                toggleCheck()
                setStatus(!status)
            }}>
                <img src={check} alt="check" />
            </button>
        </$TodayHabit>
    )
}