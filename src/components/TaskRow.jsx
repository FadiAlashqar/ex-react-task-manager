import React, { useContext, useMemo } from 'react'

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
                    <td>{task.title}</td>
                    <td className={task.status === "To do" ? "text-danger" : task.status === "Doing" ? "text-warning" : "text-success"}>{task.status}</td>
                    <td>{task.createdAt}</td>
                </tr >
            }

        </>
    )
}

export default React.memo(TaskRow)