import React, { useState } from 'react'
import './DisplayInfor.scss';

//stateless vs stateful
// class DisplayInfor extends React.Component {  

//     render() {
//         console.log('call me render');
//         //const listUsers = this.props.listUsers
//         // props => viết tắt properties
//         //destructuring array/object
//         const { listUsers } = this.props; //object
//         // console.log(listUsers);
//         // console.table(listUsers);
//         return (
//             <div className="display-infor-container">
//                 {true &&
//                     <div>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div>my name's {user.name} </div>
//                                         <div>my age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}> Delete </button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }
const DisplayInfor = (props) => {
    const { listUsers } = props; //object
    const [isShowHideListUser, setShowHideListUser] = useState(true); // tham số đầu tiên lànhuwđịnh nghĩa 1 state bằng this    
    const handleUserHideListUser = () => {

        setShowHideListUser(!isShowHideListUser);
    }
    console.log("call me render")
    Userffect(() => {
        if (listUsers.length === 0) {
            console.log("deleted all the usser");

        }
        console.log("call me userffect");

    }, [listUsers])
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleUserHideListUser()}>show list user
                    {isShowHideListUser === true ? " hide list user" : " show list user"}
                </span>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>my name's {user.name} </div>
                                    <div>my age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}> Delete </button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )


}
export default DisplayInfor;