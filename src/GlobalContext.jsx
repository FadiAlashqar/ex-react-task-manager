import React from "react"
import { useEffect, useState } from "react"
import useTasks from "./hooks/useTasks"

export const GlobalContext = React.createContext()

export function GlobalContextProvider({ children }) {

    const { addTask, removeTask, updateTask, data, setdata } = useTasks()


    return (
        <GlobalContext.Provider value={{ data, setdata, addTask, removeTask, updateTask }}>
            {children}
        </GlobalContext.Provider>
    )
}