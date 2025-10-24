import React from 'react'
import './DisplayInfor.scss';
import logo from './../logo.svg';
class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        //const listUsers = this.props.listUsers
        // props => viết tắt properties
        //destructuring array/object
        const { listUsers } = this.props; //object
        // console.log(listUsers);
        // console.table(listUsers);
        return (
            <div className="display-infor-container">
                {/* <img src={logo} alt="" /> */}
                <div>
                    <span onClick={this.handleShowHide}>
                        {this.state.isShowListUser ? "Hide list users" : "Show list users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {

                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>my name's {user.name} </div>
                                        <div>my age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}> Delete </button>
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
}
export default DisplayInfor;