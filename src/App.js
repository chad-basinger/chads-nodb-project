import axios from 'axios';
import Header from './Components/Header'
import React, {Component} from 'react'
import './App2.css';
import HatList from './Components/HatList'
import hats from './hats'
import Register from './Components/Register'

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
        <section className="main-section">
          <div className="hat-list">
            <HatList hat={this.state.hats}/>
          </div>
          <aside className="register">
            <Register />
          </aside>
        </section>
      </div>
    );
  }
}

export default App;
