import React from 'react';
import EmployeeCard from './EmployeeCard';

function SearchResults(props) {
  return (
    <div className='row'>
      {props.employees.map((person, index) => (
        <EmployeeCard data={person} key={index} />
      ))}
    </div>
  );
}

export default SearchResults;