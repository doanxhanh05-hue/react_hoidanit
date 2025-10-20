// class component
// function component
import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "hoi dan it", age: "16" },
            { id: 2, name: "hanh gioi", age: "26" },
            { id: 3, name: "hanh ngu", age: "69" },
        ]
    }
    // JSX
    //dry: don't repet yousefl
    render() {

        return (
            <div>
                <UserInfor />
                <br></br>

                <DisplayInfor
                    listUsers={this.state.listUsers}

                />


            </div>
            // this =>dang su dung mycomponent

        );
    }
}

export default MyComponent;