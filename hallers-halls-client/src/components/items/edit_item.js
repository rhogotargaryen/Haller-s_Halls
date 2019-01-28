import React, { Component } from 'react'
import { connect } from 'react-redux'
import editItemAction from '../../actions/editItemAction'
import { Link } from 'react-router-dom'


class EditItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.item.name,
            description: this.props.item.description,
            id: this.props.item.id,
            price: this.props.item.price,
            auth: this.props.auth
        }
    }

    componentWillMount() {
        this.props.dispatch({type: "DROP_MESSAGES"})
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderErrors() {
        if(!!this.props.messages) {
            return this.props.messages.map((x, i) => {
                return <div className="alert alert-light" key={i}>{x}</div>
            })
        }
    }

    handleSubmitEdit = (event) => {
        event.preventDefault()
        this.props.dispatch(editItemAction(this.state))
    }

    render() {
            return (
            <div className="card container" style={{width: "18rem"}}>
                <div className="card-body">
                    <h3> Your Item Page (Editting) </h3><br></br>
                                {this.renderErrors()}
                        <form onSubmit={this.handleSubmitEdit}>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
                            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/><br></br>
                            <input type="number" name="price" value={this.state.price} onChange={this.handleChange}/><br></br>
                            <div>Id: {this.props.item.id} <strong>can not be editted</strong></div>
                        <button className="btn btn-light" type="submit">Save Changes</button>
                    </form><br></br>
                    <Link className="badge badge-light" to={`/items/${this.props.item.id}`}>Back to your Item Page</Link>
                    <Link className="badge badge-light" to={`/items`}>Back to Items Page</Link>
                </div>
            </div>)
    }
}

export default connect(state => {return {messages: state.messages}})(EditItem)