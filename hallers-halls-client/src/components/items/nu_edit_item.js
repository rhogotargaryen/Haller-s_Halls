import React, { Component } from 'react'
import { connect } from 'react-redux'
import editItemAction from '../../actions/editItemAction'
import postItemAction from '../../actions/postItemAction'


class NuEditItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            name: this.props.item.name,
            description: this.props.item.description,
            id: this.props.item.id,
            auth: this.props.auth
        }
    }


    startEdit = (event) => {
        event.preventDefault()
        this.setState({
            edit: true
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderErrors() {
        if(!!this.props.item.messages) {
            return this.props.item.messages.map((x, i) => {
                return <div key={i}>{x}</div>
            })
        }
    }

    handleSubmitEdit = (event) => {
        event.preventDefault()
        this.props.dispatch(editItemAction(this.state))
        this.setState({
            edit: false
        })
    }

    handleSubmitPost = (event) => {
        event.preventDefault()
        this.props.dispatch(postItemAction(this.state))
    }    

    render() {
        if (!!this.props.item.id & this.state.edit === false) {
            return (
                <div>
                    <h3> Your Item Page </h3><br></br>
                    {this.renderErrors()}
                    <br></br>
                    <div>Name: {this.props.item.name}</div>
                    <div>Description: {this.props.item.description}</div>
                    <div>price: {this.props.item.price}</div>
                    <div>Id: {this.props.item.id}</div><br></br>
                    <button onClick={this.startEdit}>Edit Your Item Info</button>
                </div>
            )
        }
        else if (!!this.props.item.id & this.state.edit === true) {
            return (
            <div>
                <h3> Your Item Page (Editting) </h3><br></br>
                {this.renderErrors()}
                    <form onSubmit={this.handleSubmitEdit}>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/><br></br>
                        <input type="integer" name="price" value={this.state.price} onChange={this.handleChange}/><br></br>
                        <div>Id: {this.props.item.id} <strong>can not be editted</strong></div>
                    <button type="submit">Save Changes</button>
                </form><br></br>
            </div>)
        } else {
            return (
            <div>
                <h3> Create New Item </h3><br></br>
                {this.renderErrors()}
                    <form onSubmit={this.handleSubmitPost}>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/><br></br>
                        <input type="integer" name="price" value={this.state.price} onChange={this.handleChange}/><br></br>
                    <button type="submit"> Create Item </button>
                </form><br></br>
            </div>)
        }
    }

}

export default connect()(NuEditItem)