import './App.css';

import React, {useState, useEffect} from 'react';
import {db} from './firebase-config';
import {collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc} from 'firebase/firestore';

import Players from './Players';
import AddPlayerForm from './AddPlayerForm';

function App() {
  const [players, setPlayers] = useState([]);
  const playersCollectionRef=collection(db, 'players');

  // Execute at start
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Fetch from Fir
    const res = await getDocs(playersCollectionRef);

    // Get all players in an array
    const players = res.docs.map((doc)=>({...doc.data(), id: doc.id}));
    setPlayers(players);
  };

  const onAddPlayer=async (player)=>{
    const createdPlayerRef = await addDoc(playersCollectionRef, player);
    fetchData();
    console.log('createdPlayerRef', createdPlayerRef);
  };

  const onDeletePlayer=async (playerId)=>{
    const playerDoc = await doc(db, 'players', playerId);
    await deleteDoc(playerDoc);
    fetchData();
  };

  return (
    <div className="App">
      <Players players={players}
        onDeletePlayer={(id)=>onDeletePlayer(id)}
      />
      <AddPlayerForm onAddPlayer={onAddPlayer}/>
    </div>
  );
}

export default App;
