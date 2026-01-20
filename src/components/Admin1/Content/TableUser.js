
const TableUser = (props) => {
    const {listUsers} = props;
    console.log('render view');
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-users-${index}`}>
                                    <th>{item.id}</th>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button onClick={()=> props.handleClickButtonView(item)} className='btn btn-secondary'>View</button>
                                        <button
                                         onClick={()=> props.handleClickButtonUpdate(item)} 
                                         className='btn btn-warning mx-3'>Update</button>
                                        <button className='btn btn-danger '>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={'4'}> Not Found Data</td>
                        </tr>}
                </tbody>
            </table>
        </>
    )
}

export default TableUser;
