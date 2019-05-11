import React from 'react'


const SeparateSmurf = (props) => {
    
    const smurf = props.smurfs.find(
        thing => `${thing.id}` === props.match.params.id
    )
    if (!props.smurfs.length || !smurf) {
        return <h2>Loading item data...</h2>;
      }

    return (
        <div className="Smurf">
        
          <h3>{smurf.name}</h3>
          <strong>{smurf.height} tall</strong>
          <p>{smurf.age} smurf years old</p>
          
         
        </div>
      );
}
export default SeparateSmurf