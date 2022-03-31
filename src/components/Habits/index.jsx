import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Habit } from "./Habit"
import { NewHabit } from "./NewHabit"
import { $Habits } from "./style"

export const Habits = () => {

    const [form, setForm] = useState([])
    function callbackCancel() {
        setForm([...form].filter((el, i) => i !== 0))
    }

    const [habits, setHabits] = useState([])

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

    const { user } = useContext(UserContext)

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        const promise = axios.get(URL, config)

        promise.then(({ data }) => {
            console.log(data)
            setHabits(data)
        })
        promise.catch(({ response }) => console.log(response))

    }, [])

    return (
        <$Habits>
            <Header />
            <div>
                <h1>Meus hábitos</h1>
                <button onClick={() => setForm([...form, 1])} >+</button>
            </div>
            {form.map(el => <NewHabit
                callbackCancel={callbackCancel}
                habits={habits}
                setHabits={(value) => setHabits(value)}
            />)}
            {habits.map(habit => <Habit
                name={habit.name}
                days={habit.days}
            />)}
            <Footer />
        </$Habits>
    )
}