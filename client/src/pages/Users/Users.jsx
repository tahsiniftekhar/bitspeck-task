import React, { Component } from 'react'
import axios from "axios"
import { connect } from "react-redux"
import Navbar from "../../components/Navbar/DashNav";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import AddUser from "./AddUser"
import EditUser from "./EditUser"


class UserPage extends Component {
    state = {
        users: [],
        message: ""
    }

    componentDidMount() {
        axios
        .get("/api/users/",
            {
                headers: {
                    Authorization: `Bearer ${this.props.token}`
                }
            })
        .then((res) => {
            const users = res.data.data
            this.setState({users})
        })
    }


    handleAddedUser = user => {
        const users = [...this.state.users, user];
        const message = "User added successfully!"
        this.setState({users, message})
    }

    
    handleEditedUser = user => {
        const users = [...this.state.users]
        const index = users.findIndex( usr => usr.id === user.id)
        users[index] = user
        const message = "User updated successfully!"
        this.setState({ users, message})
    }


    handleDelete = (userId) =>  {
        axios
        .delete(`/api/users/${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${this.props.token}`
                }
            })
        .then((res) => {
            const users = this.state.users.filter( u => u.id !== userId)
            const message = "User deleted successfully!"
            this.setState({ users, message })
        })
    }

    render() {
        return (
                <React.Fragment>
                    <Navbar />
                    <div className="container-fluid">
                        <div className="row">
                        <Sidebar />	
                            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                    <h1 className="h2">Users</h1>
                                    <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group me-2">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                    </div>
                                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                        <span data-feather="calendar"></span>
                                        This week
                                    </button>
                                    </div>
                                </div>
                                {this.state.message === '' ? null : <div class="alert alert-success">
                                    {this.state.message}
                                </div>}
                                <div className="row d-flex justify-content-center">
                                    <div className="col-6">
                                    <h3 className="text-center my-5">User Table</h3>
                                        <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Manage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.state.users.map((user) => (
                                                <tr key={user.id}>
                                                    <td>{ user.id}</td>
                                                    <th scope="row">{ user.username}</th>
                                                    <td>
                                                        <EditUser onEditUser={this.handleEditedUser} user={user} />
                                                        <button className="btn btn-sm btn-danger" onClick={() => this.handleDelete(user.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        </table>
                                    </div>

                                    <div className="col-6">
                                        <AddUser onAddUser={this.handleAddedUser}/>
                                    </div>
                                </div>
                        </main>
					</div>
				</div>
				<Footer />
			</React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps)(UserPage)
