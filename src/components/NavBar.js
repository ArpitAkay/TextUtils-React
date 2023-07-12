import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';

function NavBar(props) {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? " active": "";
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.data.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link${isActive("/")}`} aria-current="page" to="/">{props.data.home}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link${isActive("/about")}`} to="/about">{props.data.about}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch mx-2 text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => props.toggleMode(null)} />
                        <label className="form-check-label">Enable {props.mode === "light" ? "dark" : "light"} mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

NavBar.propTypes = {
    data: PropTypes.object.isRequired,
    toggleMode: PropTypes.func
}

NavBar.defaultProps = {
    data: {
        title: "TextUtils",
        home: "Home",
        about: "About"
    }
}