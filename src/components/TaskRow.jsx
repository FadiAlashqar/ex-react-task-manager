import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

const TaskRow = () => {

    const { data, setData } = useContext(GlobalContext)

    return (
        <>
            {
                data.map((d) => {
                    return <>
                        <tr key={d.id}>
                            <td>{d.title}</td>
                            <td>{d.status}</td>
                            <td>{d.createdAt}</td>
                        </tr >
                    </>

                })
            }
        </>
    )
}

export default TaskRow