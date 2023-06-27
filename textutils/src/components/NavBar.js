import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
            <div className="container-fluid">
                <a className="navbar-brand" to="#">{props.data.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{props.data.home}</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.data.about}</Link>
                        </li> */}
                    </ul>
                    <div className={`form-check form-switch mx-2 text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
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