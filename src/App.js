import axios from 'axios';
import Header from './Components/Header'
import React, {Component} from 'react'
import './App.css';
import HatList from './Components/HatList'

function App() {

    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="main-section">
          <div className="hat-list">
            <HatList />
          </div>

        </div>
      </div>
    );
}

export default App;
