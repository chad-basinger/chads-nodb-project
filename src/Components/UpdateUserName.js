import React, {Component} from 'react'

class UpdateUserName extends Component {
    constructor(){
        super()

        this.state ={
            isEditing: false
        }
    }



    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }




    render (){
        return (
            <div>
                {this.state.isEditing
                ? (
                    <div>
                        <h2>Update Existing Name</h2>
                    <div className="existing-name-current-name-input">
                        <p>New Name:</p>
                        <input 
                                value={this.props.newName}
                                onChange={e => this.props.handleNewNameInput(e.target.value)}/>
                    </div>
                    <div className="existing-name-email-input">
                        <p>Existing Email:</p>
                        <input 
                                value={this.props.newEmail}
                                onChange={e => this.props.handleNewEmailInput(e.target.value)}/>
                    </div>
                    <button onClick={() => this.props.createUser()}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <button onClick={this.handleToggle}>Update Existing Name</button>
                    </div>
                )}
            </div>
        )
    }
}

export default UpdateUserName;