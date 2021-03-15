import React, {Component} from 'react'

class UnregisterUser extends Component {
    constructor(){
        super()

        this.state ={
            isEditing: false
        }
    }



    handleToggleUnregister = () => {
        this.setState({isEditing: !this.state.isEditing})
    }



    render (){
        return (
            <div>
                {this.state.isEditing
                ? (
                    <div>
                        <h2>Stop alerts to this email</h2>
                        <div className="unregister-input">
                            <p>email:</p>
                            <input 
                                    id="unregisterEmail"
                                    value={this.props.userEmail}
                                    onChange={e => this.props.handleUnregister(e.target.value)}/>
                        </div>
                        <button onClick={() => this.props.deleteUser()}>Unregister</button>
                    </div>
                )
                : (
                    <div>
                        <button onClick={this.handleToggleUnregister}>Unregister</button>
                    </div>
                )}
            </div>
        )
    }
}

export default UnregisterUser;