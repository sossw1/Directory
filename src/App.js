// Import React and Component
import React, { Component } from 'react';
// Import components
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
// Materialize
import M from 'materialize-css';
// API
import API from './utils/API';

class App extends Component {
  state = {
    search: ""
  }

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      search: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('test');
  };

  searchEmployees = query => {
    
  }

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <>
        <NavBar />
        <SearchBar value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
        <SearchResults />
      </>
    );
  }
}

export default App;