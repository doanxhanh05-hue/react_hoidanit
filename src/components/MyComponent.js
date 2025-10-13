// class component
// function component
import React from 'react'

class MyComponent extends React.Component {
    state = {
        name: 'Hanh xau nhat the gioi',
        address: 'hoi dan it',
        age: 24,
    };

    // JSX
    render() {
        return (
            <div>
                my name is{this.state.name} and i from {this.state.address}
            </div>
            // this =>dang su dung mycomponent
        );
    }
}
export default MyComponent;