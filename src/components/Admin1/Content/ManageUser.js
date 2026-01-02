import ModelCreateUser from "./ModelCreateUser"

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
          <ModelCreateUser/>
        </div>
      </div>
    </div>
  )
}

export default ManageUser
