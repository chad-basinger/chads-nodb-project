const { default: axios } = require("axios")
import axios from 'axios'
const usersBaseURL = '/api/users'

class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            userEmail: '',
            userName: ''
        }
    }

    ComponentDidMount(){

    }

    updateEmail = () => {

    }

    updateName = () => {

    }

    createUser = () => {

    }

    deleteUser = (email) => {
        userIndex = users.findIndex(element => element.email == this.userEmail)
        deleteID = element[userIndex].id
        axios.delete(`${usersBaseURL}/${deleteID}`)
    }


}