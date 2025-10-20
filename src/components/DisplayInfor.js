import React from 'react'

class DisplayInfor extends React.Component {
    render() {
        // props => viết tắt properties
        //destructuring array/object
        const { age, name } = this.props; //object

        return (
            <div>
                <div>my name's {name}</div>
                <div>my age's {age}</div>
            </div>
        )

    }
}
export default DisplayInfor;