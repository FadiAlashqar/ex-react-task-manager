import React, { useContext, useMemo, useState } from 'react'
import { GlobalContext } from '../GlobalContext'
import TaskRow from '../components/TaskRow'


const TaskList = () => {

    const { data, setdata } = useContext(GlobalContext)
    const [sortBy, setSortBy] = useState("createdAt")
    const [sortOrder, setSortOrder] = useState(1)


    const handleSort = useMemo(() => {
        const copy = [...data]
        if (sortBy === "title") {
            copy.sort((a, b) => {
                return a.title.localeCompare(b.title) * sortOrder
            })
        }
        else if (sortBy === "status") {
            copy.sort((a, b) => {
                return a.status.localeCompare(b.status) * sortOrder
            })
        }
        else if (sortBy === "createdAt") {
            copy.sort((a, b) => {
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            })
        }


        return copy
    }, [sortBy, sortOrder])

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
                                <th onClick={() => {
                                    if (sortBy !== "title") {
                                        setSortBy("title");
                                        setSortOrder(1)
                                    }
                                    else {
                                        setSortOrder(-1)
                                    }
                                }}>Nome</th>
                                <th onClick={() => {
                                    if (sortBy !== "status") {
                                        setSortBy("status");
                                        setSortOrder(1)
                                    }
                                    else {
                                        setSortOrder(-1)
                                    }
                                }}>Stato</th>
                                <th onClick={() => {
                                    if (sortBy !== "createdAt") {
                                        setSortBy("createdAt");
                                        setSortOrder(1)
                                    }
                                    else {
                                        setSortOrder(-1)
                                    }
                                }}>Data di creazione</th>
                            </tr>
                        </thead>
                        <tbody>
                            {handleSort.map((d) => {
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