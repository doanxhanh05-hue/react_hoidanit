import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import axios from 'axios';
import { toast } from 'react-toastify';
const ModelViewUser = (props) => {
  const { show, setShow, dataView } = props;
  const handleClose = () => {
    setShow("");
    setEmail("");
    setUsername("");
    setRole("ROLE");
    setPreviewImage("");
  }
    ;
  useEffect(() => {
    if (dataView) {
      setEmail(dataView.email || "");
      setUsername(dataView.username || "");
      setRole(dataView.role || "USER");
      if (dataView.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
      }
    }
  }, [dataView]);

  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");


  return (
    <>
      <Modal className='model-add-user' backdrop="static" show={show} onHide={handleClose} size='sm'>
        <Modal.Header closeButton>
          <Modal.Title>View User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={email} disabled/>
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" value={username} disabled/>
            </div>
            <div className="col-md-4">
              <label className="form-label">role</label>
              <select id="inputState" value={role} className="form-select">
                <option value="USER">USER</option>
                <option value="Admin">ADMIN</option>
              </select>
            </div>
            <div className='col-md-12 img-preview'>
              {previewImage ? <img src={previewImage}></img>
                : <span>
                  preview Image
                </span>
              }
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelViewUser;