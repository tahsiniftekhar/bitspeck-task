import React, { Component } from 'react'
import axios from "axios"
import { connect } from "react-redux"
import { Modal, Button } from 'react-bootstrap'


class EditUser extends Component {

    state = {
        username: "",
        password: "",
        show: false
    }


    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleError = () => {
        alert("Fields are Blank")
    }

    handleEditUser = event => {
        event.preventDefault()
        return (this.state.username === "" || this.state.password ==="" ? this.handleError() : 
        axios
            .patch("api/users",
                {   
                    id: this.props.user.id,
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
                    "id": this.props.user.id,
                    "username": this.state.username
                }
                this.props.onEditUser(user)
                console.log(user)

                this.setState({
                    username: "",
                    password: ""
                })

                this.handleClose()
            }))
    }



    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleShow = () => {
        this.setState({
            show: true
        })
    }


    render() {
        return (
            <React.Fragment>
                <button className="btn btn-sm btn-info mx-1" onClick={this.handleShow}>Edit</button>

                <Modal 
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered 
                    show={this.state.show} 
                    onHide={this.handleClose}
                >
                    <form onSubmit={this.handleEditUser}>
                        <Modal.Header closeButton>
                        <Modal.Title>Update User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            
                                <div className="d-flex justify-content-center my-3">
                                    <div className="col-7">
                                        <div class="form-group my-3">
                                            <label for="username">Username</label>
                                            <input type="text" class="form-control" name="username" placeholder={this.props.user.username} value={this.state.username} onChange={this.handleInputChange} />
                                        </div>
                                        <div class="form-group my-3">
                                            <label for="password">Password</label>
                                            <input type="password" class="form-control" name="password" placeholder="Existing or New Password" value={this.state.password} onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary" >
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps)(EditUser)
