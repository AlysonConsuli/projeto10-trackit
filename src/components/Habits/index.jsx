import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Habit } from "./Habit"
import { NewHabit } from "./NewHabit"
import { $Habits, Title } from "./style"

export const Habits = () => {
    const [display, setDisplay] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [toggleErase, setToggleErase] = useState(false)
    const [habits, setHabits] = useState([])
    const { user } = useContext(UserContext)

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    function callbackDelete(value) {
        const promise = axios.delete(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${value}`,
            config
        )
        promise.then(resp => setToggleErase(!toggleErase))
        promise.catch(({ response }) => console.log(response))
    }

    useEffect(() => {
        const promise = axios.get(URL, config)
        promise.then(({ data }) => setHabits(data))
        promise.catch(({ response }) => console.log(response))

    }, [toggleErase])

    return (
        <$Habits>
            <Header />
            <Title>
                <h1>Meus hábitos</h1>
                <button onClick={() => {
                    if (refresh) {
                        setRefresh(false)
                    }
                    setDisplay(true)
                }} >
                    +
                </button>
            </Title>
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
                    <p>
                        Você não tem nenhum hábito cadastrado ainda.
                        Adicione um hábito para começar a trackear!
                    </p>
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