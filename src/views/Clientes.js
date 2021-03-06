import React from "react";
import { ModalData } from "./ModalData";
import Formulario from './clientes/Formulario'
import { useClients } from "../hooks/useClients";
import {ListadoClient} from './../components/clientes/Listado'

export default function Clientes() {


    
    const {clientes, isLoading, visible, setvisible,handleSubmit, loadClient} = useClients();

	if (isLoading) {
        return(
            
            <div>
                <div className="overlay text-center">
                    <br/>
                    <h3><b>Cargando...</b></h3>
                    <i className="fas fa-2x fa-sync fa-spin"></i>
                </div>

            </div>
        );
	}
    return ( 
        <>
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Clientes</h1>
                    </div>
                </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Listado de Clientes</h3>
                        <div className="card-tools">
                            <ModalData open={visible} setOpen={setvisible} title='Nuevo Cliente'>
                                <Formulario handleSubmit={handleSubmit}/>
                            </ModalData>
                            <button type="button" onClick={() => setvisible(true)} className="btn btn-block btn-primary">Nuevo Registro</button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table id="example1" className="table table-bordered table-hover table table-head-fixed text-nowrap">
                            <thead>
                                <tr>
                                <th>Dni</th>
                                <th>Nombre</th>
                                <th>Direcci??n</th>
                                <th>Telefono</th>
                                <th>Email</th>
                                <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map(client => (
                                    <ListadoClient 
                                        key={client.idclient} 
                                        client={client}
                                        loadClient= {loadClient}

                                    />
                                    )
                                )
                                }
                                
                                {
                                
                                    !clientes.length && (
                                        <tr>
                                            <td colSpan="6">
                                                <div className="callout callout-danger">
                                                    <p>Lo Siento no hay data disponible</p>
                                                </div>
                                            </td>
                                        </tr>
                                        
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                {/* /.card */}
            </section>


        </>
    );
}
