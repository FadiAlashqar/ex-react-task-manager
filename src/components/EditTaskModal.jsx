import React, { useRef, useState } from 'react'
import Modal from './Modal'

const EditTaskModal = ({ show, onClose, task, onSave }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [show, setShow] = useState(false)

    const editFormRef = useRef()

    const handleSubmit = () => {
        editFormRef.current.requestSubmit()
        onSave({
            ...task,
            title,
            description,
            status
        })
    }

    return <>
        {
            show && <Modal
                title={"Modifica Task"}
                content={
                    <form ref={editFormRef}>
                        <input type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Task Title'
                        />
                        <div className="form-floating my-2">
                            <textarea className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                            <label>Description</label>
                        </div>
                        <select className="form-select my-2"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                            <option value="To do">To do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                        <button></button>
                    </form>
                }
                onConfirm={handleSubmit}
            />
        }
    </>
}

export default EditTaskModal