import React from 'react';
import EmployeeCard from './EmployeeCard';

function SearchResults() {
  return (
    <div className='container'> 
      {/*map to cards for each employee*/}
      <EmployeeCard />
    </div>
  );
}

export default SearchResults;