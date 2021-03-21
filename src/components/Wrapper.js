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

  sortData = event => {
    event.preventDefault();
    let unsorted = this.state.data;
    let sorted = unsorted.sort((a,b) => {
      let aFullName = (a.name.first + a.name.last).toLowerCase().trim();
      let bFullName = (b.name.first + b.name.last).toLowerCase().trim();
      if(aFullName < bFullName) return -1;
      if(aFullName > bFullName) return 1;
      return 0;
    });
    this.setState({
      data: sorted
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <NavBar />
        <SearchBar
          value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          sortData={this.sortData}
        />
        <SearchResults employees={this.state.data} />
      </>
    );
  }
}

export default Wrapper;