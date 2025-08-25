import React, { useContext, useRef, useState } from 'react'
import { GlobalContext } from '../GlobalContext'

const AddTask = () => {

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
        console.log(
            `
         titolo : ${title}
         desrizione : ${textAreaRef.current.value}
         stato : ${selectRef.current.value}
         `
        )
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