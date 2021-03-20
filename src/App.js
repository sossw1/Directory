// Import React and Component
import React, {Component} from 'react';
// Import components
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
// Materialize
import M from 'materialize-css';
// API
import API from './utils/API';

class App extends Component {
  state = {

  }

  componentDidMount() {
    M.AutoInit();
  }

  render () {
    return (
      <>
        <NavBar />
        <div className='container'>
          <SearchBar />
        </div>
      </>
    );
  }
}

export default App;