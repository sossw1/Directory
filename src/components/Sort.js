import React from 'react';

function Sort(props) {
  return (
    <div className='input-field'>
      <button
        className='btn-small waves-effect waves-lighten blue darken-4'
        onClick={props.sortData}
      >
        Sort by Name
      </button>
    </div>
  );
}

export default Sort;