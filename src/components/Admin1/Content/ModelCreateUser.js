import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import axios from 'axios';
import { toast } from 'react-toastify';
const ModelCreateUser = (props) => {
  const { show, setShow } = props;
  const handleClose = () => {
    setShow("");
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("ROLE");
    setPreviewImage("")
  }
    ;
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("USER");
  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0])
    } else {
      // setPreviewImage("");
    }
  }
  const [previewImage, setPreviewImage] = useState("");

  const handleSubmitCreateUser = async () => {
    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };


    //validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail){
      toast.error('invalid email')
      return;
    }if (!password){
      toast.error('invalid password')
      return;
    }
      //call apis
      // let data={
      //   email: email,
      //   password: password,
      //   username: username,
      //   role: role,
      //   userImage: image 
      // }
      // console.log(data);
      //submit data
      const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    let res = await axios.post('http://localhost:8081/api/v1/participant', data);
    if(res.data && res.data.EC === 0 )
      toast.success(res.data.EM);
      handleClose();
    if(res.data && res.data.EC === 1 )
      toast.error(res.data.EM);

  }
  return (
    <>
      <Modal className='model-add-user' backdrop="static" show={show} onHide={handleClose} size='sm'>
        <Modal.Header closeButton>
          <Modal.Title>ADD new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" value={email} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input onChange={(event) => setPassword(event.target.value)} type="password" className="form-control" value={password} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input onChange={(event) => setUsername(event.target.value)} type="text" className="form-control" value={username} />
            </div>
            <div className="col-md-4">
              <label className="form-label">role</label>
              <select id="inputState" onChange={(event) => setRole(event.target.value)} value={role} className="form-select">
                <option value="USER">USER</option>
                <option value="Admin">ADMIN</option>
              </select>
            </div>
            <div className='col-md-12'>
              <label className="form-label label-upload" htmlFor='labelUpload'><FcPlus /> Upload file image</label>
              <input onChange={(event) => handleUploadImage(event)} type='file' id='labelUpload' hidden></input>
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
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelCreateUser;