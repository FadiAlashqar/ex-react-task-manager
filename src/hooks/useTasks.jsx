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
    const removeTask = () => { }
    const updateTask = () => { }

    return { addTask, removeTask, updateTask, data, setdata }
}

export default useTasks