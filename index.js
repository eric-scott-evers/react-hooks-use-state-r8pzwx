import React, {useState} from 'react';
import {render} from 'react-dom';
import Hello from './Hello';

// more info 

function FishingBucket() {
  const [fishType, setFishType] = useState('a fish yet undecided');
  const [name, setName] = useState('default value');

  return (
    <>
    <button onClick={() => setFishType('trout')}>Fish for Trout</button>
    <button onClick={() => setFishType('salmon')}>Fish for Salmon</button>
    
    <Hello name={name} />
      <input value={name} onChange={(e) => ( e.target.value)} />

    <p>We are fishing for {fishType}</p>
    </>
  )
}


render(<FishingBucket />, document.getElementById('root'));
