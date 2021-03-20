import React from 'react';
import Sort from '../components/Sort';

function SearchBar(props) {
  return (
    <div className='container'>
      <form>
        <div className='row'>
          <div className='col s12 m5'>
            <div className='input-field'>
              <input
                id='search'
                type='search'
                placeholder='Search by Name'
                value={props.value}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className='col s2'>
            <div className='input-field'>
              <button
                onClick={props.handleFormSubmit}
                className='btn-small waves-effect waves-lighten blue darken-4'>
                Search
              </button>
            </div>
          </div>
          <div className='col s2 hide-on-med-and-up'></div>
          <div className='col s8 m5'>
            <Sort />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;