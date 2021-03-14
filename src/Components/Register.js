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

    updateEmail = (id, newEmail) => {
        axios.put(`${usersBaseURL}/${id}`)

    }

    updateName = () => {

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
            // console.log(this.state.users)
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
        console.log(this.state.users)
        axios.delete(`${usersBaseURL}`, `${this.state.userEmail}`)
        console.log(this.state.users)
    }

    handleNewEmailInput = (val) => {
        this.setState({userEmail: val})
        // console.log(this.state.userEmail)
    }

    handleNewNameInput = (val) => {
        this.setState({userName: val})
        // console.log(this.state.userName)
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
                    <UpdateUserName />
                </div>
                <div className="updateExistingEmail">
                    <UpdateUserEmail />
                </div>
                <div className="unregister">
                    <UnregisterUser handleUnregister={this.handleUnregister} deleteUser={this.deleteUser}/>
                </div>

            </div>
            
        )
    }
}

export default Register;