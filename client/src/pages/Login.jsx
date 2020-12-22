import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleLogin } from '../actions/authAction'


class LoginPage extends Component {

    render() {
        const { authReducer, handleLogin, location } = this.props

        return (
            <React.Fragment>
                {authReducer.isLoading ? (
                    <div></div>
                ) : authReducer.isAuthenticated ? (
                    <Redirect to="/dashboard" />
                ) : (
                    <Login handleLogin={handleLogin} location={location} authReducer={authReducer}/>
                )}
            </React.Fragment>
        )
    }
}


class Login extends Component {
    state = {
        username: "",
        password: "",
    }

    // componentDidMount() {
    //     document.body.addEventListener('click', this.handleMessage)
    // }
    
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        this.props.handleLogin(this.state)
    }

    // handleMessage = event => {
    //     var errMsg = document.getElementsByClassName('text-danger').style.display='none'
    //     console.log('errMsg')
    // }

    render() {
        return (
            <div className="container d-flex justify-content-center" style={{paddingTop: "10%"}}>
                <div className="col-3">
                    <h3 className="text-center my-5">Admin Panel</h3>
                    <form onSubmit={this.handleFormSubmit}>
                        <div class="form-group my-3">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} />
                        </div>
                        <div class="form-group my-3">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                        </div>
                        <div className="text-center">
                            <button type="submit" class="btn btn-dark btn-block my-1" style={{paddingLeft: "44%", paddingRight: "44%"}}>Login</button>
                        </div>
                    </form>
                    { this.props.location.state ? <h3 style={{display: ''}} className="text-center text-danger mt-4">{this.props.location.state.message}</h3> : null }
                    { this.props.authReducer.user ? <h3 style={{display: ''}} className="text-center text-danger mt-4">{this.props.authReducer.user}</h3> : null }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    authReducer: state.authReducer
})

const mapDispatchToProps = {
    handleLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
