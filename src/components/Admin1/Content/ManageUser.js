import ModelCreateUser from "./ModelCreateUser"
import './ManageUser.scss';
const ManageUser = (props) => {
  return (
    <div className='manage-users-container'>
      <div className='title'>
        Mânage User
      </div>
      <div className='users-content'>
        <div>
          <button></button>
        </div>
        <div>
          table users
        </div>
        <ModelCreateUser />
      </div>
      
    </div>
  )
}

export default ManageUser
