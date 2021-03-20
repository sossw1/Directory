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
    search: "",
    result: {}
  }

  componentDidMount() {
    M.AutoInit();
    this.searchEmployees();
  }

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      search: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search);
  };

  searchEmployees = () => {
    API.search()
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <NavBar />
        <SearchBar value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
        <SearchResults results={this.state.results} />
      </>
    );
  }
}

export default App;