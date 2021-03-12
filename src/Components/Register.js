import React, {Component} from 'react'
const { default: axios } = require("axios")
const usersBaseURL = '/api/users'

class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: [],
            userEmail: '',
            userName: ''
        }
        
    }

    componentDidMount(){
        axios.get(`${usersBaseURL}`)
            .then(response => {
                this.setState({users: response.data})
            })
    }

    updateEmail = () => {

    }

    updateName = () => {

    }

    createUser = () => {

    }

    deleteUser = (email) => {
        const {userIndex} = this.state.users.findIndex(element => element.email === this.userEmail)
        const {deleteID} = this.state.users[userIndex].id
        axios.delete(`${usersBaseURL}/${deleteID}`)
    }



    render(){
        return (
            <div className='register-items'>
                <h1>Number of Registered Users being alerted: {129 + this.state.users.length}</h1>
                <div>

                </div>
                <div>

                </div>

            </div>
            
        )
    }
}

export default Register;