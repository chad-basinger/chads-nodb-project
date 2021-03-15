import React, {Component} from 'react'

class RegisterUser extends Component {
    constructor(){
        super()
    }

    


    render() {
        return (
            <div>
                <h2>Register for Sales Alerts</h2>
                <div className="register-name-input">
                    <p>Name:</p>
                    <input 
                            id="userName"
                            value={this.props.userName}
                            onChange={e => this.props.handleNewNameInput(e.target.value)}/>
                </div>
                <div className="register-email-input">
                    <p>Email:</p>
                    <input 
                            id="userEmail"
                            value={this.props.userEmail}
                            onChange={e => this.props.handleNewEmailInput(e.target.value)}/>
                </div>
                <button onClick={() => this.props.createUser()}>Submit</button>
                {/* <div id="success">Success!</div> */}
            </div>
        )
    }
}

export default RegisterUser