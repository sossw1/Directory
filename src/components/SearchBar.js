import React from 'react';

function SearchBar() {
  return (
    <div className='container'>
      <form>
        <div className='input-field'>
          <input id='search' type='search' placeholder='Search by Name' />
          <label className='label-icon'></label>
          <i className='material-icons'>close</i>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;