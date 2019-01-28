import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//React Context api - videos Wes Bos
// blog post Arrow Functions and This scope - How does "This" work? Why use Arrow functions?

class Item extends Component {

  render() {
    if (this.props.auth) {
        return <div className="col-auto"><div className="card container" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{this.props.item.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Belongs to: {this.props.item.user.name}</h6>
          <p className="card-text">{this.props.item.description}</p>
          <div>Price: <strong>{this.props.item.price}</strong></div>
          <Link className="badge badge-light" to={`/items/${this.props.item.id}/edit`}>Your Item: edit info</Link><br></br>
        </div>
      </div><br></br></div> } else if (this.props.show === true) {
        return <div className="col-auto"><div className="card container" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{this.props.item.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Belongs to: {this.props.item.user.name}</h6>
          <p className="card-text">{this.props.item.description}</p>
          <div>Price: <strong>{this.props.item.price}</strong></div>
          <Link className="badge badge-light" to={`/items`}>back to items</Link><br></br>
        </div>
      </div><br></br></div>
            
    }

    return <div className="col-auto"><div className="card container" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{this.props.item.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Belongs to: {this.props.item.user.name}</h6>
      <p className="card-text">{this.props.item.description}</p>
      <div>Price: <strong>{this.props.item.price}</strong></div>
      <Link className="badge badge-light" to={`/items/${this.props.item.id}`}>more info</Link><br></br>
    </div>
  </div><br></br></div>
  }
}

export default Item



