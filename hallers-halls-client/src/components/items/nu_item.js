import React, { Component } from 'react'
import editItemAction from '../../actions/editItemAction'
import postItemAction from '../../actions/postItemAction'


class NuItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
    }

    handleSubmitPost = (event) => {
        event.preventDefault()
        this.props.dispatch(postItemAction(this.state))
    }    

    render() {
            return (
            <div>
                <h3> Create an Item </h3><br></br>
                {this.renderErrors()}
                    <form onSubmit={this.handleSubmitEdit}>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/><br></br>
                        <input type="integer" name="price" value={this.state.price} onChange={this.handleChange}/><br></br>
                        <div>Id: {this.props.item.id} <strong>can not be editted</strong></div>
                    <button type="submit">Create Item</button>
                </form><br></br>
            </div>)
    }

}

export default NuItem