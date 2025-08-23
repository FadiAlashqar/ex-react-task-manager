import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <>
            <header>
                <div className='navbar'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/TaskList'}>TaskList</NavLink>
                    <NavLink to={'/AddTask'}>AddTask</NavLink>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default DefaultLayout