import React from 'react'
import {Button, Form} from 'react-bootstrap'
import { useForm } from '../../hooks/useProviders'

export default function Formulario({handleSubmit}) {


    const {_handleSubmit, cambioValor}= useForm(handleSubmit)
    
    return (
        <>
            <Form onSubmit={_handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nit</Form.Label>
                <Form.Control type="text"  name="nit" placeholder="Ingrese Nit" onChange={cambioValor} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre Empresa</Form.Label>
                <Form.Control type="text" name="name" placeholder="Ingrese Nombre" onChange={cambioValor} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre del contacto</Form.Label>
                <Form.Control type="text" name="contact" placeholder="Ingrese Contacto" onChange={cambioValor} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" name="address" placeholder="Ingrese Dirección" onChange={cambioValor} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" name="phone" placeholder="Ingrese Telefono" onChange={cambioValor} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Movil</Form.Label>
                <Form.Control type="text" name="mobile" placeholder="Ingrese Movil" onChange={cambioValor} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name="email" placeholder="Ingrese Correo" onChange={cambioValor} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Sitio Web</Form.Label>
                <Form.Control type="url" name="website" placeholder="Ingrese stio web" onChange={cambioValor} required />
            </Form.Group>
            <div className="modal-footer mt-2">
                <Button variant="primary" type="submit">
                    Registrar
                </Button>
            </div>
            </Form>
        </>
    )
}
