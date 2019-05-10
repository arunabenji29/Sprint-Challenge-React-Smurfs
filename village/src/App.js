import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import UpdateForm from './components/UpdateForm'
import { Route, NavLink } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeItem: null
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addSmurf = (list) => {
    this.setState({
      smurfs: list
    })
    this.props.history.push('/')
  }

  updateItem = (updatedItem) => {
    axios.put(`http://localhost:3333/smurfs/${updatedItem.id}`, updatedItem)
      .then(res => {
        console.log(res)
        this.setState({
          smurfs: res.data
        })
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  setUpdateForm = smurf => {
    console.log('update form data ' + smurf.name)
    this.setState({
      activeItem: smurf
    })

    this.props.history.push('/smurf-update')
    // console.log('update form data in state'+this.state.activeItem.name)
  }

  deleteItem = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log(res)
        this.setState({
          smurfs: res.data
        })
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {
    return (
      <div className="App">

        <nav >
          <div className="nav-links">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/smurf-form'>Add Smurf</NavLink>
          </div>
        </nav>

        <Route path='/smurf-form'
          render={props => (
            <SmurfForm {...props}
              smurfs={this.state.smurfs}
              addSmurf={this.addSmurf}
            />
          )}
        />

        <Route path='/smurf-update'
          render={props => (
            <UpdateForm {...props}
              activeItem={this.state.activeItem}
              updateItem={this.updateItem}
            />
          )}
        />


        <Route exact path='/'
          render={props => (
            <Smurfs {...props}
              smurfs={this.state.smurfs}
              deleteItem={this.deleteItem}
              setUpdateForm={this.setUpdateForm}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
