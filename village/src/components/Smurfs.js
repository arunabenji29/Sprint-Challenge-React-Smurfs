import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul className='all-smurfs'>
          {this.props.smurfs.map(smurf => {
            return (
              <Route exact path='/'
                render={props => (
                  <Smurf {...props}
                    deleteItem={this.props.deleteItem}
                    setUpdateForm={this.props.setUpdateForm}
                    details={smurf}

                    key={smurf.id}
                  />
                )} />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
