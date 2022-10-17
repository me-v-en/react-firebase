/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import './AddPlayerForm.scss';

function AddPlayerForm(props) {
  const {onAddPlayer} = props;

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(12);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (firstname && lastname && age) {
      onAddPlayer({firstname, lastname, age});
    }
  };

  return (
    <form onSubmit={handleSubmit} className='addPlayerForm'>
      <input type='text'
        placeholder='Prénom'
        value={firstname}
        onChange={(e)=>setFirstname(e.target.value)} required/>

      <input type='text'
        placeholder='Nom'
        value={lastname}
        onChange={(e)=>setLastname(e.target.value)} required/>

      <input type='number'
        placeholder='Age'
        value={age}
        onChange={(e)=>setAge(e.target.value)} required/>

      <button type='submit'>Ajouter</button>

    </form>
  );
}

export default AddPlayerForm;
