import React from 'react';

const Smurf = props => {

  const deleteItem = (event,smurf) => {
    
    event.preventDefault();
    console.log('delete button clicked '+ smurf.name)
    props.deleteItem(smurf.id)

  }

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={event => deleteItem(event,props)}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

