import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../GlobalContext'
import Modal from '../components/Modal'

const TaskDetail = () => {

    const { data, removeTask } = useContext(GlobalContext)
    const { id } = useParams()
    const [show, setShow] = useState(false)

    const selectedTask = data.find((d) => {
        return d.id === Number(id)
    })

    const navigate = useNavigate()

    const handleClick = () => {
        try {
            setShow(true)
            console.log(selectedTask)
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
                    <button onClick={() => handleClick()}>Delete Task</button>
                    {selectedTask && < Modal
                        title={selectedTask.title}
                        content={selectedTask.description}
                        show={show}
                        onClose={() => setShow(false)}
                        onConfirm={() => {
                            return removeTask(Number(id))
                                .then(() => {
                                    alert(`Task eliminata !`)
                                    navigate('/TaskList')
                                })
                        }}
                    />}
                </div>
            </div>
        </div>
    )
}

export default TaskDetail