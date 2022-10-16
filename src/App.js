import logo from './logo.svg'
import './App.css'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'

class App extends React.Component {
  componentDidMount () {
    console.log('componentDidMount')
    getDocs(collection(db, 'players'))
      .then(res => {
        res.forEach(player => {
          console.log('player', player.id, player.data())
        })
      })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  };
}

export default App
