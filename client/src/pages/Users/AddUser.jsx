import React, { Component } from 'react'
import axios from "axios"
import { connect } from "react-redux"


class AddUser extends Component {

    state = {
        username: "",
        password: ""
    }


    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    handleError = () => {
        alert("Fields are Blank")
    }


    handleAddUser = event => {
        event.preventDefault()
        return (this.state.username === "" || this.state.password ==="" ? this.handleError() : 
        axios
            .post("api/users",
                {
                    username: this.state.username,
                    password: this.state.password
                },
                { 
                    headers: {
                        Authorization: `Bearer ${this.props.token}`
                    }
                })
            .then((res) => {
                var user = res.data.data
                
                user = {
                    "id": user.insertId,
                    "username": this.state.username
                }
                this.props.onAddUser(user)
                console.log(user)

                this.setState({
                    username: "",
                    password: ""
                })
            }))
    }


    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="col-7">
                    <h3 className="text-center my-5">Add User</h3>
                    <form onSubmit={this.handleAddUser}>
                        <div class="form-group my-3">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} />
                        </div>
                        <div class="form-group my-3">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                        </div>
                        <div className="text-center">
                            <button type="submit" class="btn btn-primary btn-block mb-5" style={{paddingLeft: "45%", paddingRight: "45%"}} >Add</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps)(AddUser)
