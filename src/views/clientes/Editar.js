import React from 'react'
import {Button, Form} from 'react-bootstrap'
// import { useForm } from '../../hooks/useClients'


export default function Editar({handleUpdate, cliente, setcliente}) {


    // const {_handleSubmit, cambioValor}= useForm(handleSubmit)

    const cambioValor = (e) =>{

		setcliente({
            ...cliente,
            [e.target.name]:e.target.value
        })
	}

    let {names, address, phone, mobile,email} = cliente

    const _handleUpdate = (e) =>{

        e.preventDefault()
        //validamos los datos
        if (names=== '' || address=== '' || phone === '' || mobile === '' || email === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        handleUpdate(cliente)
    }


    
    return (
        <>
            <Form onSubmit={_handleUpdate}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Dni</Form.Label>
                <Form.Control type="text"  name="dni" placeholder="Ingrese Dni" onChange={cambioValor} value={cliente.dni} />
                <Form.Control type="hidden"  name="idclient"  onChange={cambioValor} value={cliente.idclient} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="text" name="names" placeholder="Ingrese Nombre" onChange={cambioValor} value={cliente.names} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" name="address" placeholder="Ingrese Dirección" onChange={cambioValor} value={cliente.address} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" name="phone" placeholder="Ingrese Telefono" onChange={cambioValor} value={cliente.phone} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Movil</Form.Label>
                <Form.Control type="text" name="mobile" placeholder="Ingrese Movil" onChange={cambioValor} value={cliente.mobile} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name="email" placeholder="Ingrese Correo" onChange={cambioValor} value={cliente.email} />
            </Form.Group>
            <div className="modal-footer mt-2">
                <Button variant="primary" type="submit">
                    Actualizar
                </Button>
            </div>
            </Form>
        </>
    )
}
