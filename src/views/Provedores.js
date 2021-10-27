import React from "react";
import { ModalData } from "./ModalData";
import Formulario from '../components/provedores/Formulario'
import { useProviders } from "../hooks/useProviders";
import {ListadoProvedor} from './../components/provedores/Listado'

export default function Provedores() {
    
    const {provedores, isLoading, visible, setvisible,handleSubmit, loadProvedores} = useProviders();

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
                    <h1>Provedores</h1>
                    </div>
                </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Listado de Provedores</h3>
                        <div className="card-tools">
                            <ModalData open={visible} setOpen={setvisible} title='Nuevo Producto'>
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
                                <th>Nombre</th>
                                <th>Contacto</th>
                                <th>Dirección</th>
                                <th>Email</th>
                                <th>Web</th>
                                <th>Telefono</th>
                                <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {provedores.map(provedor => (
                                    <ListadoProvedor 
                                        key={provedor.idprovider} 
                                        prove={provedor}
                                        loadProvedores= {loadProvedores}

                                    />
                                    )
                                )
                                }
                                
                                {
                                
                                    !provedores.length && (
                                        <tr>
                                            <td colSpan="7">
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
