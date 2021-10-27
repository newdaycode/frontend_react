import React, {useState} from 'react'
import { deleteProvedor, updateProvedor } from '../../services/provedores';
import Editar from '../../components/provedores/Editar';
import { ModalData } from '../../views/ModalData';

export const ListadoProvedor = ({prove, loadProvedores}) => {


    const [visible, setvisible] = useState(false);
    const [provedor, setprovedor] = useState({
        nit: '',
        name: '',
        contact: '',
        address: '',
        email: '',
        phone: '',
        mobile: '',
        website: ''
    })


    const editData = (prove) =>{

        const {name, contact, address, email, phone, mobile, website, idprovider, nit} = prove

        setprovedor({

            idprovider: idprovider,
            nit: nit,
            name: name,
            contact: contact,
            address: address,
            email: email,
            phone: phone,
            mobile: mobile,
            website: website
        })

        setvisible(true)
    }

    const deleteData = (id) =>{

        deleteProvedor(id)
		.then((dataResponse)=>{
            console.log(dataResponse.data.content)
			loadProvedores()

				
		})
	}

    const handleUpdate = async (data) => {
        await updateProvedor(data)
        await loadProvedores()
        setvisible(false)
    }


    const {name,address, contact, email, phone, website, idprovider} = prove
    return (
        <>
        <tr>
            <td>{name}</td>
            <td>{contact}</td>
            <td>{address}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                <button 
                    type="button" 
                    className="btn btn-warning btn-sm"
                    onClick={() => editData(prove)}>Editar</button>
                <button 
                    type="button" 
                    className="btn btn-danger btn-sm"
                    onClick={()=>deleteData(idprovider)}>Eliminar</button>
                </div>
            </td> 
        </tr>
        <ModalData open={visible} setOpen={setvisible} title='Actualizar Datos'>
            <Editar handleUpdate={handleUpdate} provedor={provedor} setprovedor={setprovedor}/>
        </ModalData>
        </>
        
    )
}
