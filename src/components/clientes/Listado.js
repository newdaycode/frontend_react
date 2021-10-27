import React, {useState} from 'react'
import { deleteCliente, updateCliente } from '../../services/clientes';
import Editar from '../../views/clientes/Editar';
import { ModalData } from '../../views/ModalData';
import swal from 'sweetalert'

export const ListadoClient = ({client, loadClient}) => {


    const [visible, setvisible] = useState(false);
    const [cliente, setcliente] = useState({
		dni: '',
		names: '',
		address: '',
		phone: '',
		mobile: '',
		email:''
    })


    const editData = (client) =>{

        setcliente({
            dni: client.dni,
            idclient: client.idclient,
            names: client.nameclient,
            address: client.address,
            phone: client.phone,
            mobile: client.mobile,
            email: client.email
        })

        setvisible(true)
    }

    const deleteData = (id) =>{

        swal({
            title: "¿Esta Seguro?",
            text: "Una vez eliminado,no podra recupera este registro!",
            icon: "warning",
            buttons: ['No','Si'],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {

                deleteCliente(id)
                .then((dataResponse)=>{
                    swal(dataResponse.data.content, {
                        icon: "success",
                      });

                	loadClient()
                        
                })
            } else {
              swal("Tu registro no se elimino!");
            }
        });
	}


    const handleUpdate = async (data) => {
        await updateCliente(data)
        .then((dataResponse)=>{
            if (dataResponse.data.status) {
                swal(dataResponse.data.content, {
                    icon: dataResponse.data.icon,
                  });

                  loadClient()
                  setvisible(false)
            }
            
            swal(dataResponse.data.content, {
                icon: dataResponse.data.icon,
            });
                
        })
    }

    const {dni,nameclient, address, phone, email, idclient} = client
    return (
        <>
        <tr>
            <td>{dni}</td>
            <td>{nameclient}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                <button 
                    type="button" 
                    className="btn btn-warning btn-sm"
                    onClick={() => editData(client)}>Editar</button>
                <button 
                    type="button" 
                    className="btn btn-danger btn-sm"
                    onClick={()=>deleteData(idclient)}>Eliminar</button>
                </div>
            </td> 
        </tr>
        <ModalData open={visible} setOpen={setvisible} title='Actualizar Datos'>
            <Editar handleUpdate={handleUpdate} cliente={cliente} setcliente={setcliente}/>
        </ModalData>
        </>
        
    )
}
