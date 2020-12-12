import React, { useState } from 'react'
import Dropdown from './Dropdown'
import './Navbar.scss'

const Navbar = ()=>{

    let [show, setShow] = useState(false)

    return(
        <>
        <nav className="navbar">
            {/* column brand */}
            <div className="column-brand-and-menu">
                <h1 className="brand">
                    Learn to Code
                </h1>

                <div className="menu"
                    onMouseEnter={(()=>{
                        setShow(true)
                    })}
                    onMouseLeave={(()=>{
                        setShow(false)
                    })}
                >
                    <p className="txt-menu">
                        blog
                    </p>
                    <i className="fas fa-caret-down"></i>

                    {/* menu Dropdown */}
                    <Dropdown
                        display={show ? 'flex' : 'none'}
                        height={show ? '120px' : '0.1px'}
                    />
                    {/* end menu Dropdown */}
                </div>
            </div>
            {/* end column brand */}

            {/* column search */}
            <form type="submit" className="column-search">
                <input type="text" className="input-search"
                    placeholder="Cari artikel..."
                />
                <i className="fas fa-search"></i>
            </form>
            {/* end columnn search */}
        </nav>
        </>
    )
}

export default Navbar