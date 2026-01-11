import ModelCreateUser from "./ModelCreateUser"
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from 'react'
import { getAllUsers } from '../../../services/apiService';
import ModelUpdateUser from "./ModelUpdateUser";
const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModelUpdateUser, setShowModelUpdateUser] = useState(false);
  const [ dataUpdate, setDataUpdate] = useState({});

  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers()
    if (res.EC === 0) {
      setListUsers(res.DT)
    }
  }
  const handleClickButtonUpdate =(user)=>{
    setShowModelUpdateUser(true);
    setDataUpdate(user)
  }
  const handleShowHideModal = (value) => {
    setShowModalCreateUser(value);
  }
  return (
    <div className='manage-users-container'>
      <div className='title'>
        Mânage User
      </div>
      <div className='users-content'>
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}><FcPlus />ADd new User</button>
        </div>
        <div className="table-users-container">
          <TableUser listUsers={listUsers} handleClickButtonUpdate={handleClickButtonUpdate} />
        </div>
        <ModelCreateUser show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModelUpdateUser
        show={showModelUpdateUser}
        setShow={setShowModelUpdateUser}
        dataUpdate={dataUpdate}      
        />
      </div>

    </div>
  )
}

export default ManageUser
