import ModelCreateUser from "./ModelCreateUser"
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = (props) => {
  const[showModalCreateUser, setShowModalCreateUser] = useState(false);
  const handleShowHideModal =(value) =>{
    setShowModalCreateUser(value);
  }
  return (
    <div className='manage-users-container'>
      <div className='title'>
        Mânage User
      </div>
      <div className='users-content'>
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={()=>setShowModalCreateUser(true)}><FcPlus/>ADd new User</button>
        </div>
        <div className="table-users-container">
          <TableUser/>
        </div>
        <ModelCreateUser show={showModalCreateUser}
        setShow={setShowModalCreateUser}
        />
      </div>
      
    </div>
  )
}

export default ManageUser
