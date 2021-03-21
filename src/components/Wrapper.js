import React, {Component} from 'react';
// Components
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
// Materialize
import M from 'materialize-css';
// API
import API from '../utils/API';

class Wrapper extends Component {
  state = {
    search: "",
    data: []
  }

  componentDidMount() {
    M.AutoInit();
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then(res => this.setState({ data: res.data.results }))
      .catch(err => console.log(err));
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

  render() {
    return (
      <>
        <NavBar />
        <SearchBar value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
        <SearchResults employees={this.state.data} />
      </>
    );
  }
}

export default Wrapper;