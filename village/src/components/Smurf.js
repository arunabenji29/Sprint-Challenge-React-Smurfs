import React from 'react';

const Smurf = props => {

  const deleteItem = (event,smurf) => {
    
    event.preventDefault();
    console.log('delete button clicked '+ smurf.name)
    props.deleteItem(smurf.id)

  }

  const updateForm = (event,smurf) => {
    
    event.preventDefault();
    console.log('update button clicked '+ smurf.name)
    props.setUpdateForm(smurf)
  }

  return (
    <div className="Smurf">
      <h3>{props.details.name}</h3>
      <strong>{props.details.height} tall</strong>
      <p>{props.details.age} smurf years old</p>
      <button onClick={event => updateForm(event,props.details)}>Update</button>
      <button onClick={event => deleteItem(event,props.details)}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

