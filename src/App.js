import axios from 'axios';
import Header from './Components/Header'
import React, {Component} from 'react'
import './App.css';
import HatList from './Components/HatList'
import hats from './hats'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
       hats: hats

    }
  }
  render(){

    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="main-section">
          <div className="hat-list">
            <HatList hat={this.state.hats}/>
          </div>
          <div className="register">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
