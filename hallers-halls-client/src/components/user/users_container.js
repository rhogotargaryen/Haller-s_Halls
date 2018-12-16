import React, { Component } from 'react'

class UsersContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    myHeaders = new Headers({'Authorization': 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNTQ0OTU5MDYwLCJleHAiOjE1NDQ5NzM0NjAsImp0aSI6ImJkNDlkMzdiLWJiMTktNDdkYy04M2Q1LWYxNTM4NzJmZDc2NSJ9.9CUwMLnuj_xckipPdijffRypoeJBp4CE2iQA0EK-yXY",
        'Accept': 'application/json',
        'Content-Type': 'application/json'})


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