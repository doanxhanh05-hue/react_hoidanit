import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModelViewUser = (props) => {
  const { show, setShow, dataView, resetViewData } = props;
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");
  useEffect(() => {
    if (dataView && Object.keys(dataView).length > 0) {
      setEmail(dataView.email || "");
      setUsername(dataView.username || "");
      setRole(dataView.role || "USER");
      if (dataView.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
      } else {
        setPreviewImage("");
      }
    }
  }, [dataView]);
  const handleClose = () => {
    setShow(false);
    resetViewData();
    setEmail("");
    setUsername("");
    setRole("USER");
    setPreviewImage("");
  };
  return (
    <Modal
      className="model-view-user"
      backdrop="static"
      show={show}
      onHide={handleClose}
      size="sm"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>View User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="row g-3">
          <div className="col-md-12">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              disabled
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              disabled
            />
          </div>
          <div className="col-md-12">
            <label className="form-label">Role</label>
            <select className="form-select" value={role} disabled>
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          <div className="col-md-12 img-preview text-center">
            {previewImage ? (
              <img
                src={previewImage}
                alt="preview"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            ) : (
              <span>No image</span>
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModelViewUser;
