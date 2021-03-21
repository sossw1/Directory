import React from 'react';
import Sort from '../components/Sort';

function SearchBar(props) {
  return (
    <div className='container'>
      <form>
        <div className='row'>
          <div className='col s6'>
            <div className='input-field'>
              <input
                id='search'
                type='search'
                placeholder='Search by Name'
                value={props.value}
                onSubmit={props.handleFormSubmit}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className='col s6'>
            <Sort />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;