import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        YuHacks
                    </Link>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='UploadPage' className='nav-links' onClick={closeMobileMenu}>
                                UploadPage
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='ResultPage' className='nav-links' onClick={closeMobileMenu}>
                                ResultPage
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar
