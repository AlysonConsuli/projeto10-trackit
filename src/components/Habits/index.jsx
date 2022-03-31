import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
//import { config } from "../../services/Token"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { NewHabit } from "./NewHabit"
import { $Habits } from "./style"

export const Habits = () => {

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
        })
        promise.catch(({ response }) => console.log(response))

    }, [])

    return (
        <$Habits>
            <Header />
            <div>
                <h1>Meus hábitos</h1>
                <button onClick={() => setHabits([...habits, { name: '', days: [] }])} >+</button>
            </div>
            {habits.map(habit => <NewHabit />)}
            <Footer />
        </$Habits>
    )
}