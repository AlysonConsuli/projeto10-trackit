import axios from "axios"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { $Today } from "./style"
import { TodayHabit } from "./TodayHabit"

export const Today = () => {

    dayjs.locale('pt-br')
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'

    const { user, setUser } = useContext(UserContext)
    //console.log(user)

    const [todayHabits, setTodayHabits] = useState([])
    console.log(todayHabits)

    const habitsDone = todayHabits.filter(habit => habit.done)
    console.log(habitsDone)

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
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
                <h1>{dayjs().format('dddd, DD/MM')}</h1>
                {habitsDone.length === 0 ?
                    <span>Nenhum hábito concluído ainda</span>
                    :
                    <h2>{Math.round(user.percentage)}% dos hábitos concluídos</h2>
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