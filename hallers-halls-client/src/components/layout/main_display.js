import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import LoginComponent from '../auth/login';
import LogoutComponent from '../auth/logout'
import UsersContainer from '../../containers/users/users_container'
import ItemsContainer from '../../containers/items/items_container'
import ItemContainer from '../../containers/items/item_container'
import UserContainer from '../../containers/users/user_container'
import NuItem from '../items/nu_item'

class MainDisplay extends Component {

    render() {
        return (
            <div className="col-sm-10 container">
            <React.Fragment>
                <Switch>
                    <Route exact path="/" render={() => <LoginComponent />} />
                    <Route exact path="/users/:userId/edit" render={(routerProps) => <UserContainer edit={true} {...routerProps} />} />
                    <Route exact path="/users/:userId/items" render={(routerProps) => <ItemsContainer nested={true} {...routerProps} />} />
                    <Route exact path="/user/edit" render={(routerProps) => <UserContainer {...routerProps}/>} />
                    <Route exact path="/users/new" render={(routerProps) => <UserContainer new={true} {...routerProps} />} />
                    <Route exact path="/users/:userId" render={(routerProps) => <UserContainer edit={false} {...routerProps} />} />
                    <Route exact path="/users" render={() => <UsersContainer />} />
                    <Route exact path="/items/new" render={() => <NuItem />} />
                    <Route exact path="/items/:itemId/edit" render={(routerProps) => <ItemContainer edit={true} {...routerProps} />} />
                    <Route exact path="/items/:itemId/user" render={(routerProps) => <UserContainer nested={true} {...routerProps} />} />
                    <Route exact path="/items/:itemId" render={(routerProps) => <ItemContainer {...routerProps} edit={false} />} />
                    <Route exact path="/items" render={() => <ItemsContainer />} />
                    <Route exact path='/login' render={() => <LoginComponent />}/>
                    <Route exact path='/logout' render={() => <LogoutComponent />}/>
                </Switch>
            </React.Fragment>
            </div>
        )
    }
}

export default MainDisplay