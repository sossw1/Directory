import React from 'react';

function SearchBar() {
  return (
    <form>
      <div className='input-field'>
        <input id='search' type='search' placeholder='Search by Name' />
        <label className='label-icon'></label>
        <i className='material-icons'>close</i>
      </div>
    </form>
  );
}

export default SearchBar;