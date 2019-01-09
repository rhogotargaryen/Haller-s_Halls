import React, { Component } from 'react'
import postItemAction from '../../actions/postItemAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NuItem extends Component {
        state = {
            name: "",
            description: "",
            id: null,
            price: null,
        }
    
    componentWillMount() {
        this.props.dispatch({type: "DROP_ITEM"})
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderErrors() {
        if (!!this.props.messages) {
            return this.props.messages.map((x, i) => {
                return <div key={i}>{x}</div>
        })}
    }

    handleSubmitPost = (event) => {
        event.preventDefault()
        this.props.dispatch(postItemAction({...this.state, auth: this.props.auth}))
    }    

    render() {
        return (
            <div>
                <h3> Create an Item </h3><br></br>
                {this.renderErrors()}
                    <form onSubmit={this.handleSubmitPost}>
                        NAME: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
                        DESC: <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/><br></br>
                        PRICE: <input type="number" name="price" onChange={this.handleChange}/><br></br>
                    <button type="submit">Create Item</button>
                </form><br></br>
                <Link to="/items" >back to items</Link>
            </div>) 
    }

}

export default connect(state => {return {auth: state.login.auth, item: state.item, messages: state.messages}})(NuItem)