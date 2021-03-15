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
                        <div className="update-new-name-input">
                            <p>New Name:</p>
                            <input 
                                    id="newName"
                                    value={this.props.newName}
                                    onChange={e => this.props.handleUpdateNameInput(e.target.value)}/>
                        </div>
                        <div className="existing-name-email-input">
                            <p>Existing Email:</p>
                            <input 
                                    id="existingEmail"
                                    value={this.props.userEmail}
                                    onChange={e => this.props.handleExistingEmailInput(e.target.value)}/>
                        </div>
                        <button onClick={() => this.props.updateName()}>Submit</button>
                        {/* <div id="success">Successfully Registered!</div> */}
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