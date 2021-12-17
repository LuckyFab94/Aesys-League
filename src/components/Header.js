import logo from '../Aesys_League.svg';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Header = (props) => {
    return (
            <header style={{ backgroundColor: '#3f3f38' }}>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#3f3f38' }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} className='Header-logo' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/squadre">Squadre</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/partite">Partite</Link>
                                </li>
                                {/*
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                            </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
    )
}

export default Header
