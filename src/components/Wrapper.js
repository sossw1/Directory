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
    originalData: [],
    data: [],
  }

  componentDidMount() {
    M.AutoInit();
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then(res => this.setState({
        originalData: res.data.results,
        data: res.data.results
      }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { value } = event.target;
    let query = value.toLowerCase().trim();
    const originalData = this.state.originalData;
    let results = [];
    for(let i=0; i<originalData.length; i++) {
      let item = originalData[i];
      let fullName = (item.name.first + " " + item.name.last).toLowerCase();
      console.log(fullName);
      if(query === fullName.substring(0,query.length)) {
        results.push(item);
      }
    }
    this.setState({
      search: value,
      data: results
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <NavBar />
        <SearchBar value={this.state.search} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />
        <SearchResults employees={this.state.data} />
      </>
    );
  }
}

export default Wrapper;