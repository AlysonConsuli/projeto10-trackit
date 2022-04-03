import { useState } from "react"
import { DayBtn } from "./style"

export const Day = ({ letter, callback, disable }) => {
    const [selected, setSelected] = useState(false)

    return (
        <DayBtn
            onClick={() => {
                if (!disable) {
                    setSelected(!selected)
                    callback()
                }
            }}
            selected={selected}
        >
            <span>{letter}</span>
        </DayBtn>
    )
}