import React from 'react';

function EmployeeCard(props) {
  return(
    <div className="col s12 m6">
      <div className="card blue darken-4">
        <div className="card-content white-text">
          <span className="card-title">Name: </span>
          <p>ID Number: </p>
          <p>Phone Number: </p>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard;