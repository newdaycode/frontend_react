import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="main-footer">
                <strong>Copyright © 2021 <a href="/#" onClick={(e) => e.preventDefault()}>Solución Optica</a>.</strong> Todos los derechos reservados.
                </footer>

            </div>
        )
    }
}
