import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


export class PrivateRoute extends Component {   

    render() {
        const {component: Component, authReducer, ...rest } = this.props

        return (
            <Route
                {...rest}
                render = {(props) => {
                    if (authReducer.isLoading) {
                        return <div></div>
                    } else if (authReducer.isAuthenticated) {
                        return <Component {...props} />
                    } else {
                        return <Redirect to={{
                            pathname: '/',
                            state: {
                                message: 'Login First!'
                            }
                        }} />
                    }
                }}
            />
        )
    }
}

const mapStateToProps = state => ({
    authReducer: state.authReducer
})

export default connect(mapStateToProps)(PrivateRoute)
