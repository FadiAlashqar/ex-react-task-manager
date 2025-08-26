import React, { useContext, useRef, useState } from 'react'
import { GlobalContext } from '../GlobalContext'
import useTasks from '../hooks/useTasks'

const AddTask = () => {

    const { addTask, data } = useTasks()

    const [title, setTitle] = useState("")

    const textAreaRef = useRef()
    const selectRef = useRef()

    const getErrorMessage = (title) => {
        const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

        const includesSymbols = title.split("").some((t) => symbols.includes(t))

        const isValid = title.trim() !== ""

        if (includesSymbols) {
            return `Caratteri non ammessi! (${title.split("").filter((t) => symbols.includes(t))})`
        }
        if (!isValid) {
            return "Compila il campo!"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            addTask({ title, description: textAreaRef.current.value, status: selectRef.current.value })
            setTitle("")
            textAreaRef.current.value = ""
            selectRef.current.value = ""
            alert('Task aggiunta con successo!')
            console.log(data)
        }
        catch (err) {
            alert(`Errore nel processo : ${err.message}`)
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form>
                        <div className='my-2'>
                            <input type="text"
                                value={title}
                                placeholder='Task Title'
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <span className='text-danger mx-2'>{getErrorMessage(title)}</span>
                        </div>
                        <div className="form-floating my-2">
                            <textarea className="form-control"
                                ref={textAreaRef}
                            ></textarea>
                            <label>Description</label>
                        </div>
                        <select className="form-select my-2" ref={selectRef}>
                            <option value="To do">To do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                        <button onClick={(e) => handleSubmit(e)}>Conferma</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTask