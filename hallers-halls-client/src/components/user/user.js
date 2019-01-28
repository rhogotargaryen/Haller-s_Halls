import React from 'react'
import { Link } from 'react-router-dom'


const User = (props) => {
    if (props.user.id === null) {
        return (
            <div className="col-auto">
            <div className="card container" style={{width: "18rem"}}>
              <div className="card-body">
                <h5 className="card-title"><div>User Not Found</div></h5>
                <Link className="badge badge-light" to={`/users`}>Back to Users</Link><br></br>
              </div>
            </div><br></br>
          </div>)
    } else if (props.displayOnly === true) {
        return (
            <div className="col-auto">
              <div className="card container" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title"><div>Name:{props.user.name}</div></h5>
                  <h6 className="card-subtitle mb-2 text-muted">Email:{props.user.email}</h6>
                  <Link className="badge badge-light" to={`/users`}>Back to Users</Link><br></br>
                </div>
              </div><br></br>
            </div>)
    } else {
        return (
            <div className="col-auto"><div className="card container" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title"><div>Name:{props.user.name}</div></h5>
              <h6 className="card-subtitle mb-2 text-muted">Email:{props.user.email}</h6>
              <Link className="badge badge-light" to={`/users/${props.user.id}`}>More Info</Link><br></br>
            </div>
          </div><br></br></div>
        )
    }
}

export default User