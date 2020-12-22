import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import PrivateRoute from "./pages/PrivateRoute"
import Products from "./pages/Products"
import Sales from "./pages/Sales"
import Users from "./pages/Users/Users"
import store from './store'
import NotFound from "./pages/404";
import './App.css'
import { loadUser } from './actions/authAction'



export default class App extends Component {
  constructor(props) {
    super(props)
    store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/users" component={Users} />
            <PrivateRoute exact path="/products" component={Products} />
            <PrivateRoute exact path="/sales" component={Sales} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
