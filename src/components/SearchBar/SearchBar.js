import React from 'react';

function SearchBar() {
  return (
    <form>
      <div class="input-field">
        <input id="search" type="search" required />
        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
        <i class="material-icons">close</i>
      </div>
    </form>
  );
}

export default SearchBar;