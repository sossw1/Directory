import React from 'react';

function EmployeeCard(props) {
  return(
    <div className="col s12 m6">
      <div className="card blue darken-4">
        <div className='card-image'>
          <img src={props.data.picture.large} />
        </div>
        <div className="card-content white-text">
          <span className="card-title flow-text">Name: {props.data.name.first} {props.data.name.last}</span>
          <p className='flow-text'>City: {props.data.location.city}, {props.data.location.state}</p>
          <p className='flow-text'>Phone Number: {props.data.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard;