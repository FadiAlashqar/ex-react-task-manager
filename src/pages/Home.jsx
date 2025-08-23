import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

const Home = () => {

    const { data, setData } = useContext(GlobalContext)
    console.log(data)

    return (
        <div>Home</div>
    )
}

export default Home