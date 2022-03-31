import { Day } from "../Days"
import { $NewHabit } from "./style"
import { useContext, useState } from "react"
import axios from "axios"
import { UserContext } from "../../../contexts/UserContext"

export const NewHabit = ({ callbackCancel, setHabits, habits }) => {

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
        const promise = axios.post(URL, {
            name: habitName,
            days: days.sort(sortfunction)
        }, config)

        promise.then(({ data }) => {
            console.log(data)
            setHabits([...habits, data])
            callbackCancel()
        })
        promise.catch(({ response }) => {
            console.log(response)
        })

    }

    return (
        <$NewHabit>
            <form onSubmit={saveHabit}>
                <input
                    type="text"
                    name="habitName"
                    placeholder="nome do hábito"
                    required
                    onChange={e => setNewHabit({ ...newHabit, habitName: e.target.value })}
                    value={newHabit.habitName}
                />
                <div>
                    {letters.map((letter, i) => <Day key={i} letter={letter}
                        callback={() => {
                            if (days.includes(i)) {
                                setNewHabit({ ...newHabit, days: [...days].filter(day => day !== i) })
                            } else {
                                setNewHabit({ ...newHabit, days: [...days, i] })
                            }
                        }}
                    />)}
                </div>
                <button type="button" onClick={() => callbackCancel()}>Cancelar</button>
                <button type="submit">Salvar</button>
            </form>
        </$NewHabit>
    )
}