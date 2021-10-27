import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default class login extends Component {
    render() {
        return (
            <>
                {/* /.login-logo */}
                <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <img src={logo} alt="Logo solucion Optica" style={{width: '250px'}} />
                </div>
                <div className="card-body">
                <p className="login-box-msg">Regístrese para iniciar su sesión</p>
                <form action="../../index3.html" method="post">
                    <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope" />
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password" />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-8">
                        <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember"> Recuérdame </label>
                        </div>
                    </div>
                    {/* /.col */}
                    <div className="col-4">
                        <Link to="/admin" type="submit" className="btn btn-primary btn-block">Iniciar</Link>
                    </div>
                    {/* /.col */}
                    </div>
                </form>
                <p className="mb-1">
                    <a href="forgot-password.html">¿Se te olvidó tu contraseña?</a>
                </p>
                {/* <p className="mb-0">
                    <Link to="/auth/register" className="text-center">Crea una cuenta</Link>

                </p> */}
                </div>
                {/* /.card-body */}
            </div>

            </>
        )
    }
}
