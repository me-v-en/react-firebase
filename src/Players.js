/* eslint-disable no-unused-vars */

import React from 'react';

function Players(props) {
  const {players} = props;
  const renderPlayer = (player) => {
    return <Player player={player} key={player}></Player>;
  };

  return (
    <>
      <ul>{players.map((player) => renderPlayer(player))}</ul>
    </>
  );
}

function Player(props) {
  const {firstname, lastname} = props.player;

  return <li>{`${firstname} ${lastname}`}</li>;
}

export default Players;
