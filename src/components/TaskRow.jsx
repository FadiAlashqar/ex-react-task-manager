import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

const TaskRow = () => {

    const { data, setData } = useContext(GlobalContext)

    const status = [
        "To do",
        "Doing",
        "Done"
    ]

    return (
        <>
            {
                data.map((d) => {
                    return <tr key={d.id}>
                        <td>{d.title}</td>
                        <td className={d.status === "To do" ? "text-danger" : d.status === "Doing" ? "text-warning" : "text-success"}>{d.status}</td>
                        <td>{d.createdAt}</td>
                    </tr >

                })
            }
        </>
    )
}

export default TaskRow