// class component
// function component
import React from 'react'

class MyComponent extends React.Component {
    state = {
        name: 'Hanh xau nhat the gioi',
        // address: 'hoi dan it',
        // age: 24,
    };
    handleClick(event) {
        console.log(">> click me my button");
        console.log('random', Math.floor((Math.random() * 100) + 1));

        this.setState({
            name: 'eric',
            age: Math.floor((Math.random() * 100) + 1)
        })
        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }
    handleOnMoverOver(event) {
        console.log(event.pageX);
    }
    // JSX
    render() {
        return (
            <div>
                my name is{this.state.name} and i'm {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}>hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>click me</button>
            </div>
            // this =>dang su dung mycomponent

        );
    }
}
export default MyComponent;