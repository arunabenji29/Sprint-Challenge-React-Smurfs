import React from 'react';

const Smurf = props => {
  console.log(props.match.params.id)
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

  const routeToItem = (event, smurf) => {
    event.preventDefault();
    props.history.push(`/smurf/${smurf.id}`);
  }

  return (
    <div className="Smurf">
    <div onClick={event => routeToItem(event,props.details)}>
      <h3>{props.details.name}</h3>
      <strong>{props.details.height} tall</strong>
      <p>{props.details.age} smurf years old</p>
      </div>
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

