import ModelCreateUser from "./ModelCreateUser"
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from 'react'
import { getAllUsers, getUserWithPaginate } from '../../../services/apiService';
import ModelUpdateUser from "./ModelUpdateUser";
import ModelViewUser from "./ModelViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser = (props) => {
  const LIMIT_USER = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModelUpdateUser, setShowModelUpdateUser] = useState(false);
  const [showModelViewUser, setShowModelViewUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataView, setDataView] = useState({});
  const [dataDelete, setDataDelete] = useState({});
  const [listUsers, setListUsers] = useState([]);
  const [showModelDeleteUser, setShowModelDeleteUser] = useState(false);
  useEffect(() => {
    fetchListUsersWithPaginate(1);
  }, []);


  const fetchListUsers = async () => {
    let res = await getAllUsers()
    if (res.EC === 0) {
      setListUsers(res.DT)
    }
  }
  const fetchListUsersWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER)
    if (res.EC === 0) {
      console.log('res.dt = ', res.DT);
      setListUsers(res.DT.users)
      setPageCount(res.DT.totalPages)
    }
  }
  const [pageCount, setPageCount] = useState(0);

  const handleClickButtonView = (user) => {
    setDataView(user);
    setShowModelViewUser(true);
  };
  const handleClickButtonUpdate = (user) => {
    setShowModelUpdateUser(true);
    setDataUpdate(user)
  }
  const handleClickButtonDelete = (user) => {
    setDataDelete(user);
    setShowModelDeleteUser(true);
  }

  const resetUpdateData = () => {
    setDataUpdate({})
  }
  const resetViewData = () => {
    setDataView({})
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
          {/* <TableUser
            handleClickButtonDelete={handleClickButtonDelete}
            listUsers={listUsers} handleClickButtonUpdate={handleClickButtonUpdate} handleClickButtonView={handleClickButtonView}/> */}
          <TableUserPaginate
            handleClickButtonDelete={handleClickButtonDelete}
            listUsers={listUsers}
            handleClickButtonUpdate={handleClickButtonUpdate}
            handleClickButtonView={handleClickButtonView}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageCount={pageCount}

          />
        </div>
        <ModelCreateUser show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModelUpdateUser
          show={showModelUpdateUser}
          setShow={setShowModelUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModelViewUser
          show={showModelViewUser}
          setShow={setShowModelViewUser}
          resetViewData={resetViewData}
          dataView={dataView}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalDeleteUser
          show={showModelDeleteUser}
          setShow={setShowModelDeleteUser}
          dataDelete={dataDelete}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default ManageUser
