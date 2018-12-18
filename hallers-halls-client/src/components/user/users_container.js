import React, { Component } from 'react'

class UsersContainer extends Component {

    componentDidMount() {
        fetch("http://localhost:3001/api/users", { headers: 
            this.myHeaders})
            .then(resp => resp.json())
            .then(data => {console.log(data); this.setState({
                users: data
        })})
    }

    renderUsers = () => {
        if(this.state.users !== []) return this.state.users.map(x => <div>{x.email}</div>)
    }

    render() {
        return (
            <div>
                <p>test</p>
                {this.renderUsers()}
            </div>
        )
    }
            
}

export default UsersContainer