import React from 'react'
import {Button, Form} from 'react-bootstrap'
import { useForm } from '../../hooks/useClients'


export default function Formulario({handleSubmit}) {


    const {_handleSubmit, cambioValor}= useForm(handleSubmit)
    
    return (
        <>
            <Form onSubmit={_handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Dni</Form.Label>
                <Form.Control type="text"  name="dni" placeholder="Ingrese Dni" onChange={cambioValor} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="text" name="names" placeholder="Ingrese Nombre" onChange={cambioValor} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" name="address" placeholder="Ingrese Dirección" onChange={cambioValor} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" name="phone" placeholder="Ingrese Telefono" onChange={cambioValor} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Movil</Form.Label>
                <Form.Control type="text" name="mobile" placeholder="Ingrese Movil" onChange={cambioValor} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name="email" placeholder="Ingrese Correo" onChange={cambioValor} />
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
