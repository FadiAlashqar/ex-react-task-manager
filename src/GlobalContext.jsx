import React from "react"
import { useEffect, useState } from "react"

export const GlobalContext = React.createContext()

export function GlobalContextProvider({ children }) {

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

    return (
        <GlobalContext.Provider value={{ data, setdata }}>
            {children}
        </GlobalContext.Provider>
    )
}