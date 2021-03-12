import React, {Component} from 'react'

class RegisterUser extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div>
                <h2>Register for Sales Alerts</h2>
                <div className="register-name-input">
                    <p>Name:</p>
                    <input 
                            value={this.props.userName}
                            onChange={e => this.props.handleNewNameInput(e.target.value)}/>
                </div>
                <div className="register-email-input">
                    <p>Email:</p>
                    <input 
                            value={this.props.userEmail}
                            onChange={e => this.props.handleNewEmailInput(e.target.value)}/>
                </div>
                <button onClick={() => this.props.createUser()}>Submit</button>
            </div>
        )
    }
}

export default RegisterUser