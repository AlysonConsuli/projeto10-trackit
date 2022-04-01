import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Habit } from "./Habit"
import { NewHabit } from "./NewHabit"
import { $Habits } from "./style"

export const Habits = () => {

    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const [toggleErase, setToggleErase] = useState(false)

    const [habits, setHabits] = useState([])

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

    const { user } = useContext(UserContext)

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    //console.log(habits)

    function callbackDelete(value) {
        const promise = axios.delete(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${value}`,
            config
        )

        promise.then(resp => {
            setToggleErase(!toggleErase)
        })
        promise.catch(({ response }) => console.log(response))
    }

    useEffect(() => {
        const promise = axios.get(URL, config)

        promise.then(({ data }) => {
            console.log(data)
            setHabits(data)
        })
        promise.catch(({ response }) => console.log(response))

    }, [toggleErase])

    return (
        <$Habits>
            <Header />
            <div>
                <h1>Meus hábitos</h1>
                <button onClick={() => {
                    if (refresh) {
                        setRefresh(false)
                    }
                    setDisplay(true)
                }} >
                    +
                </button>
            </div>
            <main>
                {
                    !refresh && <NewHabit
                        callbackCancel={() => setDisplay(false)}
                        habits={habits}
                        setHabits={(value) => setHabits(value)}
                        display={display}
                        setRefresh={() => setRefresh(true)}
                    />
                }
                {habits.length === 0 ?
                    <span>Você não tem nenhum hábito cadastrado ainda.
                        Adicione um hábito para começar a trackear!
                    </span>
                    :
                    habits.map(habit => <Habit
                        key={habit.id}
                        name={habit.name}
                        days={habit.days}
                        callbackDelete={() => callbackDelete(habit.id)}
                    />)}
            </main>
            <Footer />
        </$Habits>
    )
}