// class component
// function component
import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {

    // JSX
    render() {
        const myInfor = ['ab', 'c', 'c'];
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor name="hanh dep trai qua" age="30"/>
                <hr />
                <DisplayInfor name={"hanh ngu"} age={25} myInfor = {myInfor} />
            </div>
            // this =>dang su dung mycomponent

        );
    }
}

export default MyComponent;