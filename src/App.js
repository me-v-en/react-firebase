import './App.scss';

import React, {useState, useEffect} from 'react';
import {db} from './firebase-config';
import {collection,
  onSnapshot,
  query,
  doc,
  addDoc,
  deleteDoc,
  where,
  getDocs} from 'firebase/firestore';

import Players from './Players';
import AddPlayerForm from './AddPlayerForm';

function App() {
  const [players, setPlayers] = useState([]);
  const playersCollectionRef=collection(db, 'players');
  let unsubscribe;

  // Execute at start
  useEffect(() => {
    console.log('mount');
    fetchData();

    // Execute before unmount
    return ()=>{
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const fetchData = async () => {
    // Fetch from Fir
    unsubscribe = await onSnapshot(playersCollectionRef, (res)=>{
    // Get all players in an array
      const players = res.docs.map((doc)=>({...doc.data(), id: doc.id}));
      setPlayers(players);
    });

    const q = query(playersCollectionRef, where('age', '>=', 18));
    (await getDocs(q)).forEach((doc)=>{
      console.log(doc.data());
    });
  };

  const onAddPlayer=async (player)=>{
    const playerObj = {
      firstname: player.firstname,
      lastname: player.lastname,
      age: Number(player.age),
    };

    const createdPlayerRef = await addDoc(playersCollectionRef, playerObj);
    console.log('createdPlayerRef', createdPlayerRef);
  };

  const onDeletePlayer=async (playerId)=>{
    const playerDoc = await doc(db, 'players', playerId);
    await deleteDoc(playerDoc);
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
