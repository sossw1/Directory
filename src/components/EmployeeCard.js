import React from 'react';

function EmployeeCard(props) {
  return(
    <div className="col s12 m6">
      <div className="card blue darken-4">
        <div className='card-image'>
          <img alt='employee' src={props.data.picture.large} />
        </div>
        <div className="card-content white-text">
          <h5>Name: {props.data.name.first} {props.data.name.last}</h5>
          <p>City: {props.data.location.city}, {props.data.location.state}</p>
          <p>Phone Number: {props.data.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard;