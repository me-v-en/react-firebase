/* eslint-disable no-unused-vars */

import React from 'react';
import './Players.scss';

function Players(props) {
  const {players, onDeletePlayer} = props;


  const renderPlayer = (player) => {
    return (
      <Player player={player}
        onDeletePlayer={(id)=>onDeletePlayer(id)}
        key={player.id}></Player>
    );
  };

  return (
    <>
      <ul className='playersList'>
        {players.map((player) => renderPlayer(player))}
      </ul>
    </>
  );
}

function Player(props) {
  const {firstname, lastname, age, id} = props.player;
  const {onDeletePlayer}= props;

  return (
    <>
      <li>
        <div className='textColumn'>
          <p>{`${firstname} ${lastname}`}</p>
          <p>{`${age}`}</p>
        </div>
        <button type="button"
          onClick={()=>onDeletePlayer(id)}>
          Supprimer
        </button>
      </li>
    </>
  );
}

export default Players;
