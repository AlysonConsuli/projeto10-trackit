import { Day } from "../Days"
import { $NewHabit } from "./style"
import { useContext, useState } from "react"
import axios from "axios"
import { UserContext } from "../../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"

export const NewHabit = ({ callbackCancel, setHabits, habits, display, setRefresh }) => {

    const [disable, setDisable] = useState(false)

    const { user } = useContext(UserContext)

    const letters = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

    const [newHabit, setNewHabit] = useState({
        habitName: '',
        days: []
    })
    const { habitName, days } = newHabit

    function sortfunction(a, b) {
        return (a - b)
    }
    //console.log(days.sort(sortfunction))

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
            console.log(data)
            setHabits([...habits, data])
            setRefresh()
        })
        promise.catch(err => {
            console.log(err.response)
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
                <div>
                    {letters.map((letter, i) => <Day disable={disable} key={i} letter={letter}
                        callback={() => {
                            if (days.includes(i)) {
                                setNewHabit({ ...newHabit, days: [...days].filter(day => day !== i) })
                            } else {
                                setNewHabit({ ...newHabit, days: [...days, i] })
                            }
                        }}
                    />)}
                </div>
                <button type="button" disabled={disable} onClick={() => callbackCancel()}>Cancelar</button>
                <button type="submit" disabled={disable}>
                    {disable ? <ThreeDots color="#FFFFFF" height={13} width={13} /> : <span>Salvar</span>}
                </button>
            </form>
        </$NewHabit>
    )
}