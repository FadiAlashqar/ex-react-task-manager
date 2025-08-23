import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './pages/TaskList'
import AddTask from './pages/AddTask'
import Home from './pages/Home'
import DefaultLayout from './DefaultLayout'
import { GlobalContextProvider } from './GlobalContext'

function App() {


  return (
    <>
      <BrowserRouter>
        <GlobalContextProvider>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/TaskList' element={<TaskList />} />
              <Route path='/AddTask' element={<AddTask />} />
            </Route>
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
