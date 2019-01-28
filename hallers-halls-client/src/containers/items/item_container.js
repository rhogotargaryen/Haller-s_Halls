import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import fetchItem from '../../actions/fetchItem'
import Item from '../../components/items/item'
import EditItem from '../../components/items/edit_item'
import NuItem from '../../components/items/nu_item'

class ItemContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchItem({auth: this.props.auth, itemId: parseInt(this.props.match.params.itemId)}))
    }

    render() {
        if (this.props.auth.includes("Bearer")) {
            if (this.props.edit === true && this.props.item.user.id === this.props.user.id){
                return <EditItem auth={this.props.auth} item={this.props.item}/>
            } else if (this.props.edit === true && this.props.item.user.id !== this.props.user.id && !!this.props.item.user.id) {
                return <div><p>you're not authorized to edit someone elses item :(</p></div>
            } else if (this.props.edit === false && this.props.item.user.id === this.props.user.id) {
                return <Item item={this.props.item} auth={this.props.auth} />
            } else if (this.props.edit === false && !!this.props.user.id && this.props.item.id !== null) {
                return <Item show={true}  item={this.props.item} />
            } else if (this.props.new === true) {
                return <NuItem auth={this.props.auth}/>
            } else {
                return <div>Item Not Found</div>
            }
        } else {
            return  <Redirect to='/login'/>
        }
    }
}

export default connect(state => {return {user: state.user, auth: state.login.auth, item: state.item}})(ItemContainer)

