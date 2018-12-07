import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
//import { robots } from './robots' - not needed as robots are fetched from API
import './App.css';

import { setSearchField } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchField      // states from reducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)) // passing event from searchbox to actions.js
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    // console.log(this.props.store.getState()); logging the state upon component mount
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  // Replaced by REDUX
  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

  render () {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props; // passing redux state as props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // connect is higher-order function (returns another function)
