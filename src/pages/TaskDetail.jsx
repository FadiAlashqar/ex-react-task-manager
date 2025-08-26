import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext'

const TaskDetail = () => {

    const { data } = useContext(GlobalContext)
    const { id } = useParams()

    const selectedTask = data.find((d) => {
        return d.id === Number(id)
    })

    const handleClick = () => {
        console.log('Task eliminata')
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {<div className="card">
                        <div className="card-header">
                            {selectedTask.title}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Descrizione : </strong>{selectedTask.description}</li>
                            <li className="list-group-item"><strong>Stato : </strong>{selectedTask.status}</li>
                            <li className="list-group-item"><strong>Data creazione : </strong>{selectedTask.createdAt}</li>
                        </ul>
                    </div>}
                    <button onClick={() => handleClick()}>Elimina task</button>
                </div>
            </div>
        </div>
    )
}

export default TaskDetail