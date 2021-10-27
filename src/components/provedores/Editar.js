import React from 'react'
import {Button, Form} from 'react-bootstrap'

export default function Editar({handleUpdate, provedor, setprovedor}) {


    const cambioValor = (e) =>{

		setprovedor({
            ...provedor,
            [e.target.name]:e.target.value
        })
	}

    const {name,address, contact, email, phone, mobile, website, nit, idprovider} = provedor

    const _handleUpdate = (e) =>{

        e.preventDefault()
        //validamos los datos
        if (name=== '' || contact=== '' || address === '' || email === '' || phone === '' || website === '' || nit === '' || mobile === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }


        handleUpdate(provedor)
    }


    
    return (
        <>
            <Form onSubmit={_handleUpdate}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nit</Form.Label>
                <Form.Control type="text"  name="nit" placeholder="Ingrese Nit" onChange={cambioValor} value={nit} required readOnly />
                <Form.Control type="hidden"  name="idprovider"  onChange={cambioValor} value={idprovider} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre Empresa</Form.Label>
                <Form.Control type="text" name="name" placeholder="Ingrese Nombre" onChange={cambioValor} value={name} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre del contacto</Form.Label>
                <Form.Control type="text" name="contact" placeholder="Ingrese Contacto" onChange={cambioValor} value={contact} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" name="address" placeholder="Ingrese Dirección" onChange={cambioValor} value={address} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" name="phone" placeholder="Ingrese Telefono" onChange={cambioValor} value={phone} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Movil</Form.Label>
                <Form.Control type="text" name="mobile" value={mobile} placeholder="Ingrese Movil" onChange={cambioValor} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name="email" placeholder="Ingrese Correo" onChange={cambioValor} value={email} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Sitio Web</Form.Label>
                <Form.Control type="url" name="website" placeholder="Ingrese stio web" onChange={cambioValor} value={website} required />
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
