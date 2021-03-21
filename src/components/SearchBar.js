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
                onChange={props.handleInputChange}
              />
              <input type='submit' onSubmit={props.handleFormSubmit} />
            </div>
          </div>
          <div className='col s6'>
            <Sort sortData={props.sortData}/>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;