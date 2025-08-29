import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

function useTasks() {

    const [data, setdata] = useState([])
    const url = import.meta.env.VITE_API_URL


    useEffect(() => {
        try {
            fetch(`${url}/tasks`)
                .then(resp => resp.json())
                .then(data => setdata(data))
        }
        catch (error) {
            console.error(error)
        }
    }, [])

    const addTask = ({ title, description, status }) => {
        return axios
            .post(`${url}/tasks`, {
                title,
                description,
                status
            })
            .then((res) => {
                if (res.data.success) {
                    setdata((prev) => [...prev, res.data.task])
                }
                else {
                    throw new Error(res.data.message)
                }
            })
            .catch((err) => console.error(err.message))



    }
    const removeTask = (taskId) => {
        return axios
            .delete(`${url}/tasks/${taskId}`)
            .then((res) => {
                if (res.data.success) {
                    setdata((prev) => prev.filter((p) => p.id !== taskId)
                    )
                }
                else {
                    throw new Error(res.data.message)
                }
            })
            .catch((err) => console.error(err.message))
    }
    const updateTask = ({ updatedTask }) => {
        return axios.put(`${url}/tasks/${updatedTask.id}`, updatedTask)
            .then((res) => {
                if (res.data.success) {
                    setdata((prev) => prev.map((p) => p.id === updatedTask.id ? updatedTask : p))
                }
                else {
                    throw new Error(res.data.message)
                }
            })
            .catch((err) => console.error(err.message))
    }

    return { addTask, removeTask, updateTask, data, setdata }
}

export default useTasks