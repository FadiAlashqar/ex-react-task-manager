import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ title, content, show = false, onClose = () => { }, onConfirm = () => { } },) => {
    return <>
        {
            show && createPortal(
                <div className="modal-container">
                    <div className="modal d-flex justify-content-center">
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <div className='d-flex justify-content-evenly'>
                            <button onClick={onClose}>Close</button>
                            <button onClick={onConfirm}>Confirm elimination</button>
                        </div>
                    </div>
                </div>,
                document.body
            )
        }
    </>

}

export default Modal