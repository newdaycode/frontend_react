import React, { Component} from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

export default class register extends Component {

    render() {
        
        return (
            <>
                <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <img src={logo} alt="Logo solucion Optica" style={{width: '250px'}} />
                </div>
                <div className="card-body">
                    <p className="login-box-msg">Registrar una nueva cuenta</p>
                    <form action="../../index.html" method="post">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nombre completo" />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-user" />
                        </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Email" />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope" />
                        </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Clave" />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-lock" />
                        </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Repetir clave" />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-lock" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                        <div className="icheck-primary">
                            <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                            <label htmlFor="agreeTerms">
                            Acepto las <a href="/#" onClick={(e) => e.preventDefault()}>condiciones</a>
                            </label>
                        </div>
                        </div>
                        {/* /.col */}
                        <div className="col-4">
                        <button type="submit" className="btn btn-primary btn-block">Registrar</button>
                        </div>
                        {/* /.col */}
                    </div>
                    </form>
                        <Link to="/auth/login" className="text-center">Ya tengo una cuenta</Link>
                    
                </div>
                {/* /.form-box */}
                </div>{/* /.card */}



            </>
        )
    }
}
