import React, { useContext, useMemo } from 'react'
import { NavLink } from 'react-router-dom'

const TaskRow = ({ task }) => {


    const status = [
        "To do",
        "Doing",
        "Done"
    ]

    return (
        <>
            {
                <tr>
                    <td><NavLink to={`/task/${task.id}`}>{task.title}</NavLink></td>
                    <td className={task.status === "To do" ? "text-danger" : task.status === "Doing" ? "text-warning" : "text-success"}>{task.status}</td>
                    <td>{task.createdAt}</td>
                </tr >
            }

        </>
    )
}

export default React.memo(TaskRow)