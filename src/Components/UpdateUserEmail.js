import React, {Component} from 'react'


class UpdateUserEmail extends Component {
    constructor(){
        super()

        this.state ={
            isEditing: false
        }
    }



    handleToggleUpdateEmail = () => {
        this.setState({isEditing: !this.state.isEditing})

    }


    render (){
        return (
            <div>
                {this.state.isEditing
                ? (
                    <div>
                        <h2>Update Existing Email</h2>
                        <div className="existing-name-name-input">
                            <p>Existing Name:</p>
                            <input 
                                    value={this.props.userName}
                                    onChange={e => this.props.handleNewEmailInput(e.target.value)}/>
                        </div>
                        <div className="existing-name-new-email-input">
                            <p>New Email:</p>
                            <input 
                                    value={this.props.newEmail}
                                    onChange={e => this.props.handleNewNameInput(e.target.value)}/>
                        </div>
                        <button onClick={() => this.props.createUser()}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <button onClick={this.handleToggleUpdateEmail}>Update Existing Email</button>
                    </div>
                )}
            </div>
        )
    }
}

export default UpdateUserEmail;