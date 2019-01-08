import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import fetchItems from '../../actions/fetchItems'
import Item from './item'


class ItemsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchItems(this.props.auth))
    }

    renderItems = () => {
        if (this.props.auth.includes("Bearer") && this.props.nested === true) {
            return this.props.items.map((x, i) => {
                if (x.user.id === this.props.user.id) {
                    return <Item key={i} item={x} auth={this.props.auth}/>}
            })
        } else if (this.props.auth.includes("Bearer")) {
            return this.props.items.map((x, i) => {
                if (x.user.id === this.props.user.id) {
                    return <Item key={i} item={x} auth={this.props.auth}/>
                } else {
                    return <Item key={i} item={x} />
                }
            })
        } else {
            return <Redirect to='/login' />
        }
    }

    render() {
        return (
            <div className="flex-container justify-items-center">
                {this.renderItems()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        auth: state.login.auth,
        user: state.user
    }
}

export default connect(mapStateToProps)(ItemsContainer)