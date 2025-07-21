import React from 'react'
import { Link } from 'react-router'

const navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className='text-2xl font-bold text-gradient'>Resumind</p>
            </Link>
            <Link to="/upload" className="primary w-fit">
                <p>Upload Resume</p>
            </Link>


        </nav>
    )
}

export default navbar