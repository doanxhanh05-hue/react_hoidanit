// class component
// function component
import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {

    state={
        listUsers : [
            {id: 1, name: "hoi dan it", age : "30"},
            {id: 2, name: "hanh gioi", age : "30"},
            {id: 3, name: "hanh ngu", age : "30"},
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
                lisUsers={this.state.listUser}
                
                />
                
                
            </div>
            // this =>dang su dung mycomponent

        );
    }
}

export default MyComponent;