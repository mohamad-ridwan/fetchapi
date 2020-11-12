import React from 'react'
import { Link } from 'react-router-dom'
import './Dropdown.scss'

const Dropdown = ({
    display,
    height
})=>{
    return(
        <>
        {/* dropdown */}
        <ul className="menu-dropdown"
            style={{
                display: `${display}`,
                height: `${height}`,
                transition : '0.4s ease'
            }}
        >
            <li className="list-menu">
                <Link to="/" className="page">
                    Home
                </Link>
            </li>
            <li className="list-menu">
                <Link to="/berita" className="page">
                    Berita
                </Link>
            </li>
            <li className="list-menu">
                <Link to="/gallery" className="page">
                    Gallery
                </Link>
            </li>
        </ul>
        {/* end dropdown */}
        </>
    )
}

export default Dropdown