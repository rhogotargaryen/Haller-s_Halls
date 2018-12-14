import React, { Component } from 'react'

class UsersContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    myHeaders = new Headers({'Authorization': 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNTQ0NzY0MzI1LCJleHAiOjE1NDQ3Nzg3MjUsImp0aSI6ImIwMDQwZmZjLTFhYmQtNGExMC04ZDc1LWI4Y2ZhZTA4NjZiYyJ9.JB_yo8yK7fnoUnxq6kw4kSQr6bOupAcllsXwyHJhiAY",
        'Accept': 'application/json',
        'Content-Type': 'application/json'})


    componentDidMount() {
        debugger
        fetch("http://localhost:3001/api/users", { headers: 
            this.myHeaders})
            .then(resp => resp.json())
            .then(data => {console.log(data); this.setState({
                users: data
        })})
    }

    renderUsers = () => {
        return this.state.users.map(x => <div>{x.email}</div>)
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