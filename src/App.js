import './App.scss';

import React, {useState, useEffect} from 'react';
import {db} from './firebase-config';
import {collection,
  onSnapshot,
  query,
  doc,
  addDoc,
  deleteDoc,
  where} from 'firebase/firestore';

import Players from './Players';
import AddPlayerForm from './AddPlayerForm';

function App() {
  const [players, setPlayers] = useState([]);
  const [playersAbove18, setPlayersAbove18] = useState([]);
  const playersCollectionRef=collection(db, 'players');
  let unsubscribePlayers;
  let unsubscribePlayers18;

  // Execute at start
  useEffect(() => {
    console.log('mount');
    fetchData();

    // Execute before unmount
    return ()=>{
      if (unsubscribePlayers) {
        unsubscribePlayers();
      }
      if (unsubscribePlayers18) {
        unsubscribePlayers18();
      }
    };
  }, []);

  const fetchData = async () => {
    // Fetch from Fir
    unsubscribePlayers = await onSnapshot(playersCollectionRef, (res)=>{
    // Get all players in an array
      const players = res.docs.map((doc)=>({...doc.data(), id: doc.id}));
      setPlayers(players);
    });

    // Query: get all players above 18
    const q = query(playersCollectionRef, where('age', '>=', 18));
    unsubscribePlayers18 = await onSnapshot(q, (res)=>{
      const playersAbove18 = res.docs.map((doc)=>({...doc.data(), id: doc.id}));
      setPlayersAbove18(playersAbove18);
    });
  };

  const onAddPlayer = async (player)=>{
    const playerObj = {
      firstname: player.firstname,
      lastname: player.lastname,
      age: Number(player.age),
    };

    await addDoc(playersCollectionRef, playerObj);
  };

  const onDeletePlayer = async (playerId)=>{
    const playerDoc = await doc(db, 'players', playerId);
    await deleteDoc(playerDoc);
  };

  return (
    <div className="App">
      <div className='playersCount'>
        <p className='players'>
          {`${players.length || '0'} ${players.length <= 0 ?
            'participant·e':
            'participant·e·s'}`}
        </p>
        <p className='playersAbove18'>
          {`${playersAbove18.length || '0'} ${playersAbove18.length <= 0 ?
            'participant·e majeur·e':
            'participant·e·s majeur·e·s'}`}
        </p>
      </div>
      <Players players={players}
        onDeletePlayer={(id)=>onDeletePlayer(id)}
      />
      <AddPlayerForm onAddPlayer={onAddPlayer}/>
    </div>
  );
}

export default App;
