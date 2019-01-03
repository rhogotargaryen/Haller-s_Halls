import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import fetchItems from '../../actions/fetchItems'


class ItemContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchItems(this.props.auth))
    }

    selectedItem(showItemId) {
        const a = this.props.items.filter(x => x.id === showItemId)
        return (a.length === 0) ? null : a[0].id
    }

    render() {
        if (this.props.auth.includes("Bearer")) {
            const a = parseInt(this.props.match.params.itemId)
            const b = this.selectedItem(a)
            if (this.props.edit === true && b === this.props.user.id){
                return <div>AUTHED ITEM EDIT</div>
            } else if (this.props.edit === true && b !== this.props.user.id) {
                return <div><p>you're not authorized to edit someone elses item :(</p></div>
            } else if (this.props.edit === false && b === this.props.user.id) {
                return <div>AUTHED ITEM SHOW</div>
            } else if (this.props.new === true) {
                return <div>NEW ITEM</div>
            } else {
                return <div>Item Not Found</div>
            }
        } else {
            return  <Redirect to='/login'/>
        }
    }

}

export default connect(state => {return {items: state.items, user: state.user, auth: state.login.auth}})(ItemContainer)