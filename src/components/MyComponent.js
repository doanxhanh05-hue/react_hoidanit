// class component
// function component
import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "hoi dan it", age: "16" },
            { id: 2, name: "hanh gioi", age: "26" },
            { id: 3, name: "hanh ngu", age: "69" },
        ]
    }
    handleAddNewUser = (userObj) => {
        let listUserClone = [...this.state.listUser];
        console.log("check: ", listUserClone);

        // this.setState({
        //     listUsers: [userObj,...this.state.listUser]
        // })
    }
    // JSX

    render() {
        //dry: don't repet yousefl
        const test = {name: 'hanhngunhucho',
            age: 25
        }
        return (
            <>
                {JSON.Stringify(test)}
                <br />
                <div className='a'>
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}

                    />
                    <br></br>

                    <DisplayInfor
                        listUsers={this.state.listUsers}
                    />


                </div>
                {/* this =>dang su dung mycomponent */}
                <div className='b'>

                </div>
            </>

        );
    }
}

export default MyComponent;