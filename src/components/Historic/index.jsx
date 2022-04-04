import { Footer } from "../Footer"
import { Header } from "../Header"
import { $Historic, HabitsDay, Li } from "./style"
import Calendar from 'react-calendar';
import { useContext, useEffect, useState } from "react";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'

export const Historic = () => {

    const [date, setDate] = useState(new Date());
    const { user } = useContext(UserContext)

    const [infos, setInfos] = useState('')
    const [list, setList] = useState([])

    dayjs.locale('pt-br')
    const dateToday = dayjs().format('DD/MM/YYYY')

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily'
    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        const promise = axios.get(URL, config)

        promise.then(({ data }) => {
            console.log(data)
            setInfos(data)
        })
        promise.catch(({ response }) => console.log(response))

    }, [])

    function handleTile(date) {
        const dateFormat = dayjs(date).format('DD/MM/YYYY')
        let daysFailed = []

        if (infos.length === 0 || dateFormat === dateToday) { return '' }
        const habitsDays = infos.map(el => el.day)
        if (habitsDays.includes(dateFormat)) {
            infos.forEach(day => {
                for (let habit of day.habits) {
                    if (!habit.done) {
                        daysFailed.push(day.day)
                        break
                    }
                }
            })
            if (daysFailed.includes(dateFormat)) {
                return 'incompleted'
            }
            return 'completed'
        }
    }

    function clickDay(date) {
        const clickedDay = dayjs(date).format('DD/MM/YYYY')
        if (infos.length === 0) { return '' }
        const habitsDays = infos.map(el => el.day)
        if (habitsDays.includes(clickedDay)) {
            infos.forEach(day => {
                if (clickedDay === day.day) {
                    setList(day.habits)
                }
            })
        } else {
            setList([])
        }
    }

    return (
        <>
            <Header />
            <$Historic>
                <h1>Histórico</h1>
                <main>
                    <Calendar
                        calendarType="US"
                        onChange={setDate}
                        value={date}
                        tileClassName={({ date }) => handleTile(date)}
                        formatDay={(locale, date) => dayjs(date).format("DD")}
                        formatShortWeekday={(locale, date) => dayjs(date).format("ddd")}
                        onClickDay={(date) => clickDay(date)}
                    />
                    {list.length !== 0 &&
                        <HabitsDay>
                            <ul>
                                {list.map(habit => {
                                    return (
                                        (habit.done ?
                                            <Li key={habit.id} done={true}>
                                                {habit.name} ✅
                                            </Li>
                                            :
                                            <Li key={habit.id} done={false}>
                                                {habit.name} ❌
                                            </Li>
                                        )
                                    )
                                })}
                            </ul>
                        </HabitsDay>
                    }
                </main >
            </$Historic >
            <Footer />
        </>
    )
}