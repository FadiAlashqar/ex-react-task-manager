import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import TaskRow from '../components/TaskRow'


const TaskList = () => {

    const { data, setdata } = useContext(GlobalContext)



    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>TASK-LIST</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Stato</th>
                                <th>Data di Creazione</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d) => {
                                return <TaskRow key={d.id} task={d} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TaskList