import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div>
            Home { process.env.SERVER_URL }
        </div>
    )
}

export default Home
