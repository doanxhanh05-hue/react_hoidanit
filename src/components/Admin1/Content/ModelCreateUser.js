import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModelCreateUser=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size='sm'>
        <Modal.Header closeButton>
          <Modal.Title>ADD new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label  className="form-label">Email</label>
              <input type="email" className="form-control" >
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" >
            </div>
            <div className="col-md-6">
              <label  className="form-label"></label>
              <input type="text" className="form-control" >
            </div>
            <div className="col-md-4">
              <label  className="form-label">ro;e</label>
              <select id="inputState" className="form-select">
                <option selected value="USER">USER</option>
                <option value="Admin">ADMIN</option>
              </select>
            </div>
            <div className='col-md-12'>
              <label className='form-label'>image</label>
              <input type='file'></input>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelCreateUser;