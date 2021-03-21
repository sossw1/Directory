import React from 'react';

function EmployeeCard(props) {
  return(
    <div className="col s12 m6">
      <div className="card blue darken-4">
        <div className="card-content white-text">
          <span className="card-title">Name: {props.data.name.first} {props.data.name.last}</span>
          <p>Location: {props.data.location.city}, {props.data.location.state}</p>
          <p>Phone Number: {props.data.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard;