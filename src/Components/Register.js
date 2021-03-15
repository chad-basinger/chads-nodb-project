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
                console.log(response.data)
            })
            .catch(err => console.log(err));
    }

    updateEmail = () => {
        axios.put(`${usersBaseURL}`, {name: `${this.state.userName}`, email: `${this.state.newEmail}`})
        .then(response => {
            this.setState({users: response.data})
            console.log(this.state.users)
        })
        .catch(error => console.log(error))

    }

    updateName = () => {
        axios.put(`${usersBaseURL}`, {name: `${this.state.newName}`, email: `${this.state.userEmail}`})
        .then(response => {
            this.setState({users: response.data})
            console.log(this.state.users)
        })
        .catch(error => console.log(error))
    }

    createUser = () => {
        // const {userName} = this.state.userName;
        // const {userEmail} = this.state.userEmail;
        // console.log(this.state.userName)
        // console.log(this.state.userEmail)
        // console.log({userName})
        // console.log({userEmail})
        axios.post(`${usersBaseURL}`, {name: `${this.state.userName}`, email: `${this.state.userEmail}`})
        .then( response => {
            this.setState({users: response.data})
            console.log(this.state.users)
        })
        .catch(err => console.log(err));

        this.setState({userName: ''})
        this.setState({userEmail: ''})
    }

    deleteUser = () => {
        // console.log(this.state.users)
        // const {userIndex} = this.state.users.findIndex(element => element.email === this.userEmail)

        // console.log(userIndex)
        // const {deleteID} = this.state.users[userIndex].id
        // console.log(this.state.users)
        axios.delete(`${usersBaseURL}`, {data: {email: `${this.state.userEmail}`}})
        .then( response => {
            console.log(response.data)
        })
        .catch(err => console.log(err))
        // console.log(this.state.users)
    }

    handleNewEmailInput = (val) => {
        this.setState({userEmail: val})
        // console.log(this.state.userEmail)
    }

    handleNewNameInput = (val) => {
        this.setState({userName: val})
        // console.log(this.state.userName)
    }

    handleUpdateNameInput = (val) => {
        this.setState({newName: val})
    }

    handleExistingEmailInput = (val) => {
        this.setState({userEmail: val})
    }

    handleExistingNameInput = (val) => {
        this.setState({userName: val})
    }

    handleUpdateEmailInput = (val) => {
        this.setState({newEmail: val})
    }


    handleUnregister = (val) => {
        this.setState({userEmail: val})
        // console.log(this.state.userEmail)
    }



    render(){
        return (
            <div className='register-items'>
                
                    <h2 className="registered-users-num">Registered Users being alerted: {129 + this.state.users.length}</h2>
                
                <div>
                    <RegisterUser handleNewNameInput={this.handleNewNameInput} handleNewEmailInput={this.handleNewEmailInput} createUser={this.createUser}/>
                </div>
                <div className="updateExistingName">
                    <UpdateUserName handleUpdateNameInput={this.handleUpdateNameInput} handleExistingEmailInput={this.handleExistingEmailInput} updateName={this.updateName}/>
                </div>
                <div className="updateExistingEmail">
                    <UpdateUserEmail handleExistingNameInput={this.handleExistingNameInput} handleUpdateEmailInput={this.handleUpdateEmailInput} updateEmail={this.updateEmail}/>
                </div>
                <div className="unregister">
                    <UnregisterUser handleUnregister={this.handleUnregister} deleteUser={this.deleteUser}/>
                </div>

            </div>
            
        )
    }
}

export default Register;