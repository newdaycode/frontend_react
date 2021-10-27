import React, { Component } from "react";
import Api from "../services/api";
class User extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			loadedData: false, 
			usuarios:[]
		}
	}

	loadData(){

		fetch(Api+'/user/list')
		.then(response=>response.json())
		.then((dataResponse)=>{
				console.log(dataResponse.content);
				this.setState({loadedData: true, usuarios:dataResponse.content})
			})
		.catch(console.log)
	}

	componentDidMount(){
		this.loadData();

	}



    render() { 

        const{loadedData, usuarios} = this.state;
        if (!loadedData) {
            return(<div>Cargando...</div>);
        }else{
            return ( 
                <>
                    <section className="content-header">
                        <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                            <h1>Usuarios</h1>
                            </div>
                        </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        {/* Default box */}
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Listado de Usuarios</h3>
                                {/* <div className="card-tools">
                                    <button type="button" className="btn btn-block btn-primary">Nuevo Registro</button>
                                </div> */}
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                <table id="example1" className="table table-bordered table-hover table table-head-fixed text-nowrap">
                                    <thead>
                                        <tr>
                                        <th>Nombre</th>
                                        <th>Dirección</th>
                                        <th>Telefono</th>
                                        <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usuarios.map(
                                            (usuario)=>(
                                                <tr key={usuario.iduser}>
                                                    <td>{usuario.names+ ' '+ usuario.surnames }</td>
                                                    <td>{usuario.address}</td>
                                                    <td>{usuario.phone}</td>
                                                    <td>{usuario.email}</td>
                                                    
                                                </tr>
                                            ))
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

    }
}
 
export default User;
