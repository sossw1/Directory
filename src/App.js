// Import React and Component
import React, {Component} from 'react';
// Import components
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
// Materialize
import M from 'materialize-css';

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
        <Container />
      </>
    );
  }
}

export default App;