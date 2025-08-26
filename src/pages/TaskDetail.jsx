import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext'

const TaskDetail = () => {

    const { data, removeTask } = useContext(GlobalContext)
    const { id } = useParams()

    const selectedTask = data.find((d) => {
        return d.id === Number(id)
    })

    const navigate = useNavigate()

    const handleClick = () => {
        try {
            removeTask(Number(id))
                .then(() => {
                    alert(`Task eliminata !`)
                    navigate('/TaskList')
                })
        }
        catch (err) {
            alert(err.message)
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {selectedTask && <div className="card">
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