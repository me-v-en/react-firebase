import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";

function Players(props) {
  const [players, setPlayers] = useState([]);


// Component did mount
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    console.log("componentDidMount");
    const res = await getDocs(collection(db, "players"));
    setPlayers( [0, 1, 2, 3] );
  };
  const renderPlayer = (player) => {
    return <Player value={player} key={player}></Player>;
  };

  return (
    <>
      <p>{players}</p>
      <ul>{players.map((player) => renderPlayer(player))}</ul>
    </>
  );
}

function Player(props) {
  const { value } = props;
  return <li>{value}</li>;
}

export default Players;
