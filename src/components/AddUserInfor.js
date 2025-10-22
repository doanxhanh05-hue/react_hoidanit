import React from 'react';

class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: 'hoi dan it',
        age: '',
    };




    // this.setState({
    //     age: Math.floor((Math.random() * 100) + 1)
    // })


    handleOnChangeInput = (event) => {
        this.setState({ name: event.target.value });

    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        });

    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.handleAddNewUser({
            id: Math.florr((Math.random() * 100) + 1) + 'random',
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (

            <div>
                my name is{this.state.name} and i'm {this.state.age}
                <from onSubmit={(event) => this.handleOnSubmit(event)}>
                    <lable>your name:</lable>
                    <input type="text" value={this.state.name}
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                    <lable>your age:</lable>
                    <input type="text" value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </from>
            </div>
        )
    }
}
export default AddUserInfor;