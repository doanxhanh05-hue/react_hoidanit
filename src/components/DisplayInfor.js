import React from 'react'

class DisplayInfor extends React.Component {
    render() {
        //const listUsers = this.props.listUsers
        // props => viết tắt properties
        //destructuring array/object
        const { listUsers } = this.props; //object
        console.log(listUsers);

        return (
            <div>
                {listUsers.map((user,index) => {
                    
                    return (
                        <div key={user.id}>
                            <hr />
                            <div>my name's {user.name} </div>
                            <div>my age's {user.age}</div>
                        </div>
                    )
                })}
                {/* <div>my name's {name}</div>
                <div>my age's {age}</div>
                <hr />
                <div>my name's {name}</div>
                <div>my age's {age}</div>
                <hr />
                <div>my name's {name}</div>
                <div>my age's {age}</div> */}
            </div>
        )

    }
}
export default DisplayInfor;