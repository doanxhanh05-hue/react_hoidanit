import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "hoi dan it", age: "16" },
//             { id: 2, name: "hanh gioi", age: "26" },
//             { id: 3, name: "hanh ngu", age: "69" },
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         let listUsersClone = [...this.state.listUsers];
//         console.log("check: ", listUsersClone);

//         this.setState({
//             listUsers: [userObj, ...listUsersClone]
//         });
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         });
//     }

// render() {
// const test = { name: 'hanhngunhucho', age: 25 };

// return (

// );
// }
// }
const MyComponent = (props) => {
    const [listUsers, setlistUser] = useState(
        [
            { id: 1, name: "hoi dan it", age: "16" },
            { id: 2, name: "hanh gioi", age: "26" },
            { id: 3, name: "hanh ngu", age: "69" },
        ]
    );
    const handleAddNewUser = (userObj) => {
        setlistUser([userObj, ...listUsers])
        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        // });
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setlistUser(listUsersClone)
        // this.setState({
        //     listUsers: listUsersClone
        // });
    }
    return (
        <>
            <br />
            <div className='a'>
                <AddUserInfor handleAddNewUser={handleAddNewUser} />
                <br />
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className='b'></div>
        </>
    )
}
export default MyComponent;
