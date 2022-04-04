import { Footer } from "../Footer"
import { Header } from "../Header"
import { $Historic } from "./style"
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

    dayjs.locale('pt-br')
    const dateFormat = dayjs().format('DD/MM/YYYY')
    console.log(dateFormat)

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily'
    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        const promise = axios.get(URL, config)

        promise.then(({ data }) => console.log(data))
        promise.catch(({ response }) => console.log(response))

    }, [])

    return (
        <>
            <Header />
            <$Historic>
                <h1>Histórico</h1>
                <main>
                    {/*<p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>*/}
                    <h1>React Calendar</h1>
                    <div>
                        <Calendar onChange={setDate} value={date} />
                    </div>
                    {/*<p>
                        <span>Selected Date:</span>{' '}
                        {date.toDateString()}
                    </p>*/}
                </main >
            </$Historic >
            <Footer />
        </>
    )
}