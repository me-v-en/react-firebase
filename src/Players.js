import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'

class Players extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      players: []
    }
  }

  async componentDidMount () {
    console.log('componentDidMount')
    const res = await getDocs(collection(db, 'players'))
    this.res = res
    this.setState({ players: [0, 1, 2, 3] })
  }

  render () {
    return (
      <>
      <p>{this.state.players}</p>
      <ul>
        {this.state.players.map(player => this.renderPlayer(player))}
      </ul>
      </>
    )
  }

  renderPlayer (player) {
    return <Player value={player} key={player}></Player>
  }
}

function Player (props) {
  return (<li>{props.value}</li>)
}

export default Players
