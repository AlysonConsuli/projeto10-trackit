import { useState } from "react"
import { DayBtn } from "./style"

export const Day = ({ letter, callback }) => {

    const [selected, setSelected] = useState(false)

    return (
        <DayBtn
            onClick={() => {
                setSelected(!selected)
                callback()
            }}
            selected={selected}
        >
            <span>{letter}</span>
        </DayBtn>
    )
}