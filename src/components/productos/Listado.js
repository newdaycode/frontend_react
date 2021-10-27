import React, {useState} from 'react'
import { deleteCliente, updateCliente } from '../../services/clientes';
import Editar from '../../views/clientes/Editar';
import { ModalData } from '../../views/ModalData';

export const ListadoProduct = ({product, loadProductos}) => {


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

        deleteCliente(id)
		.then((dataResponse)=>{
            console.log(dataResponse.data.content)
			loadProductos()
				
		})
	}


    const handleUpdate = async (data) => {
        await updateCliente(data)
        await loadProductos()
        setvisible(false)
    }

    const {code, description, idproduct, name, price, productiontime, stock, storagelocation} = product
    return (
        <>
        <tr>
            <td>{code}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{productiontime}</td>
            <td>{stock}</td>
            <td>{storagelocation}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                <button 
                    type="button" 
                    className="btn btn-warning btn-sm"
                    onClick={() => editData(product)}>Editar</button>
                <button 
                    type="button" 
                    className="btn btn-danger btn-sm"
                    onClick={()=>deleteData(idproduct)}>Eliminar</button>
                </div>
            </td> 
        </tr>
        <ModalData open={visible} setOpen={setvisible} title='Actualizar Datos'>
            <Editar handleUpdate={handleUpdate} cliente={cliente} setcliente={setcliente}/>
        </ModalData>
        </>
        
    )
}
