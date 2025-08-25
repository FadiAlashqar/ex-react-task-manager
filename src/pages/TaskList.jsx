import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'


const TaskList = () => {

    const { data, setdata } = useContext(GlobalContext)

    console.log(data)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>TASK-LIST</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul>
                        {data.map((d) => {
                            return <li key={d.id}>
                                <h3><strong>Titolo : </strong>{d.title}</h3>
                                <p><strong>Descrizione : </strong>{d.description}</p>
                                <p><strong>Stato : </strong>{d.status}</p>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TaskList