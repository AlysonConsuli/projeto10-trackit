import { Day } from "../Days"
import { $NewHabit, Boxes, Cancel, Submit } from "./style"
import { useContext, useState } from "react"
import axios from "axios"
import { UserContext } from "../../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"

export const NewHabit = ({ callbackCancel, setHabits, habits, display, setRefresh }) => {
    const letters = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [disable, setDisable] = useState(false)
    const [newHabit, setNewHabit] = useState({
        habitName: '',
        days: []
    })
    const { habitName, days } = newHabit
    const { user } = useContext(UserContext)

    function sortfunction(a, b) {
        return (a - b)
    }
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    function saveHabit(e) {
        e.preventDefault()
        if (days.length === 0) { return alert('selecione no mínimo 1 dia da semana!') }
        setDisable(true)
        const promise = axios.post(URL, {
            name: habitName,
            days: days.sort(sortfunction)
        }, config)

        promise.then(({ data }) => {
            setHabits([...habits, data])
            setRefresh()
        })
        promise.catch(err => {
            if (!err.response.data.details) {
                alert(err.response.data.message)
            } else {
                alert(err.response.data.details[0])
            }
            setDisable(false)
        })
    }

    return (
        <$NewHabit $display={display}>
            <form onSubmit={saveHabit}>
                <input
                    type="text"
                    name="habitName"
                    placeholder="nome do hábito"
                    required
                    onChange={e => setNewHabit({ ...newHabit, habitName: e.target.value })}
                    value={newHabit.habitName}
                    disabled={disable}
                />
                <Boxes>
                    {letters.map((letter, i) => <Day disable={disable} key={i} letter={letter}
                        callback={() => {
                            if (days.includes(i)) {
                                setNewHabit({ ...newHabit, days: [...days].filter(day => day !== i) })
                            } else {
                                setNewHabit({ ...newHabit, days: [...days, i] })
                            }
                        }}
                    />)}
                </Boxes>
                <Cancel type="button" disabled={disable} onClick={() => callbackCancel()}>Cancelar</Cancel>
                <Submit type="submit" disabled={disable}>
                    {disable ? <ThreeDots color="#FFFFFF" height='43' width='43' ariaLabel='loading' /> : <span>Salvar</span>}
                </Submit>
            </form>
        </$NewHabit>
    )
}