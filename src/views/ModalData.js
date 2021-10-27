import React from "react";
import {Modal} from 'react-bootstrap'
import CloseButton from 'react-bootstrap/CloseButton'

export const ModalData = ({open, setOpen, title, children}) => {

  
    return (
      <>
        <Modal show={open} onHide={() => setOpen(false)}  
          backdrop="static"
          keyboard={false}
          size="lg">
          <Modal.Header>
            <Modal.Title>{title} </Modal.Title>
            <CloseButton onClick={() => setOpen(false)} className="close">
              <i className="fas fa-times"></i>
            </CloseButton>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
        </Modal>
      </>
    );
  }
  