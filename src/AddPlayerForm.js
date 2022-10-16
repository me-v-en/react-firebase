/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

function AddPlayerForm(props) {
  const {onAddPlayer} = props;

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (firstname && lastname) {
      onAddPlayer({firstname, lastname});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text'
        placeholder='Prénom'
        value={firstname}
        onChange={(e)=>setFirstname(e.target.value)} required/>

      <input type='Nom'
        placeholder='Nom'
        value={lastname}
        onChange={(e)=>setLastname(e.target.value)} required/>

      <button type='submit'>Ajouter</button>

    </form>
  );
}

export default AddPlayerForm;
