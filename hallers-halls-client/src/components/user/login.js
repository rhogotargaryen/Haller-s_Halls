import React, { Component} from 'react'

class LoginComponent extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let reqData = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({user: this.state})
        }
        fetch('http://localhost:3001/login', reqData)
        .then(resp => {console.log(resp.headers.get('authorization')); return resp.json()})
        .then(data => {console.log(data)})
    }

    render() {
        return(
            <form id='login-form' onSubmit={this.handleSubmit}>
            <br></br>
                <label>Email:
                <input type='textfield' onChange={this.handleChange} name="email"/>
                </label><br></br>
            <br></br>
                <label>Password:
                <input type='password' onChange={this.handleChange} name="password"/>
            <br></br></label><br></br>
                <input type='submit'/>
            </form>
        )
    }
    
}



export default LoginComponent