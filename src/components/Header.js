import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="/#" onClick={(e) => e.preventDefault()} role="button"><i className="fas fa-bars" /></a>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                    <a className="nav-link" data-widget="fullscreen" href="/#" onClick={(e) => e.preventDefault()} role="button">
                        <i className="fas fa-expand-arrows-alt" />
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
        )
    }
}
