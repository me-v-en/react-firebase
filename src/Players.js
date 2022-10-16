/* eslint-disable no-unused-vars */

import React from 'react';

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
      <ul>{players.map((player) => renderPlayer(player))}</ul>
    </>
  );
}

function Player(props) {
  const {firstname, lastname, id} = props.player;
  const {onDeletePlayer}= props;

  return (
    <>
      <li>{`${firstname} ${lastname}`}</li>
      <button type="button" onClick={()=>onDeletePlayer(id)}>Supprimer</button>
    </>
  );
}

export default Players;
