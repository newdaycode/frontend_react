import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1>Blank Page</h1>
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
                        Start creating your amazing application!
                    </div>
                    </div>
                    {/* /.card */}
                </section>
                {/* /.content */}
                </div>

            </div>
        )
    }
}
