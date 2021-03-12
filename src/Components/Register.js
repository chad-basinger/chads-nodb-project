import React, {Component} from 'react'
import RegisterUser from './RegisterUser'
import UpdateUserName from './UpdateUserName'
import UpdateUserEmail from './UpdateUserEmail'
import UnregisterUser from './UnregisterUser'
const { default: axios } = require("axios")
const usersBaseURL = '/api/users'

class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: [],
            userEmail: '',
            userName: '',
            newName: '',
            newEmail: ''
        }
        

    }

    componentDidMount(){
        axios.get(`${usersBaseURL}`)
            .then(response => {
                this.setState({users: response.data})
            })
    }

    updateEmail = (id, newEmail) => {
        axios.put(`${usersBaseURL}/${id}`)

    }

    updateName = () => {

    }

    createUser = () => {
        let {newEmail} = this.state.newEmail;
        let {newName} = this.state.newName;
        axios.post(`${usersBaseURL}`, {newEmail, newName})
        .then( response => {
            this.setState({users: response.data})
        })

        this.setState({newEmail: ''})
        this.setState({newName: ''})
    }

    deleteUser = (email) => {
        const {userIndex} = this.state.users.findIndex(element => element.email === this.userEmail)
        const {deleteID} = this.state.users[userIndex].id
        axios.delete(`${usersBaseURL}/${deleteID}`)
    }

    handleNewEmailInput = (val) => {
        this.setState({newEmail: val})
    }

    handleNewNameInput = (val) => {
        this.setState({newName: val})
    }



    render(){
        return (
            <div className='register-items'>
                <h2 className="registered-users-num">Registered Users being alerted: {129 + this.state.users.length}</h2>
                <div>
                    <RegisterUser handleNewNameInput={this.handleNewNameInput} handleNewEmailInput={this.handleNewEmailInput} createUser={this.createUser}/>
                </div>
                <div className="updateExistingName">
                    <UpdateUserName />
                </div>
                <div className="updateExistingEmail">
                    <UpdateUserEmail />
                </div>
                <div className="unregister">
                    <UnregisterUser />
                </div>

            </div>
            
        )
    }
}

export default Register;