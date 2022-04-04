import axios from "axios"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { $Today, Exit } from "./style"
import { TodayHabit } from "./TodayHabit"

export const Today = () => {

    const infosString = localStorage.getItem("user")
    const infos = JSON.parse(infosString)

    console.log(infos)

    dayjs.locale('pt-br')
    const date = dayjs().format('dddd, DD/MM')[0].toUpperCase() + dayjs().format('dddd, DD/MM').substring(1)

    const [todayHabits, setTodayHabits] = useState([])
    const habitsDone = todayHabits.filter(habit => habit.done)
    //console.log(todayHabits)
    //console.log(habitsDone)

    const { user, setUser } = useContext(UserContext)
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        const promise = axios.get(URL, config)
        promise.then(({ data }) => {
            //console.log(data)
            setTodayHabits(data)
        })
        promise.catch(({ response }) => console.log(response))
    }, [])

    useEffect(() => {
        if (todayHabits.length !== 0) {
            setUser({ ...user, percentage: (habitsDone.length / todayHabits.length) * 100 })
        }
    }, [todayHabits])

    return (
        <>
            <Header />
            <$Today>
                <h1>{date}</h1>
                {habitsDone.length === 0 ?
                    <h2>Nenhum hábito concluído ainda</h2>
                    :
                    <h2><strong>{Math.round(user.percentage)}% dos hábitos concluídos</strong></h2>
                }
                <main>
                    {todayHabits.map(habit => {
                        return (
                            <TodayHabit
                                key={habit.id}
                                name={habit.name}
                                currentSequence={habit.currentSequence}
                                highestSequence={habit.highestSequence}
                                habitId={habit.id}
                                done={habit.done}
                                todayHabits={todayHabits}
                                setTodayHabits={setTodayHabits}
                            />
                        )
                    })}
                </main>
            </$Today>
            <Footer />
        </>
    )
}