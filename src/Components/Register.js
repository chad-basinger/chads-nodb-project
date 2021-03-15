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

    //update an existing user's email using their name
    updateEmail = () => {
        axios.put(`${usersBaseURL}`, {name: `${this.state.userName}`, email: `${this.state.newEmail}`})
        .then(response => {
            this.setState({users: response.data})
            console.log(this.state.users)
            this.showToast()
            this.handleClearUpdateEmail()
        })
        .catch(error => console.log(error))
        
        
    }

    //update an existing user's name using their email
    updateName = () => {
        axios.put(`${usersBaseURL}`, {name: `${this.state.newName}`, email: `${this.state.userEmail}`})
        .then(response => {
            this.setState({users: response.data})
            console.log(this.state.users)
            this.showToast()
            this.handleClearUpdateName()
        })
        .catch(error => console.log(error))

        
        
    }

    //register new user for sales alerts
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
            this.handleClearRegister()
            this.showToast()
        })
        .catch(err => console.log(err));

        

        
    }

    //unregister a user
    deleteUser = () => {
        axios.delete(`${usersBaseURL}`, {data: {email: `${this.state.userEmail}`}})
        .then( response => {
            console.log(response.data)
        })
        .catch(err => console.log(err))
        // console.log(this.state.users)
        this.handleClearUnregister()
        this.showToast()
        this.componentDidMount()
    }

    handleClearRegister = () => {
        document.getElementById("userEmail").value = "";
        document.getElementById("userName").value = "";   
    }

    handleClearUpdateName = () => {
        document.getElementById("existingEmail").value = "";
        document.getElementById("newName").value = "";   
    }

    handleClearUpdateEmail = () => {
        document.getElementById("newEmail").value = "";
        document.getElementById("existingName").value = "";   
    }

    handleClearUnregister = () => {
        document.getElementById("unregisterEmail").value = "";  
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

    showToast() {
        // Get the snackbar DIV
        var x = document.getElementById("success");
      
        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
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
                <div id="success">Success!</div>

            </div>
            
        )
    }
}

export default Register;