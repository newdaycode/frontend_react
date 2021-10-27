import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        return (
            <>
                <section className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1>Bienvenido</h1>
                        </div>
                    </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    {/* Default box */}
                    <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Title</h3>
                    </div>
                    <div className="card-body">
                        Bienvenido a tu Dashboard
                    </div>
                    </div>
                    {/* /.card */}
                </section>
            </>
        )
    }
}
