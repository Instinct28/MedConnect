import React from 'react';

const Card = (props) => {

    const {name, email, city, phone, hospitalName, bloodGroup} = props;

  return (
    <div className="card text-center mt-5 mx-5" style={{"width" : "25%"}}>
        <div className="card-body">
            <h5 className="card-title" style={{"backgroundColor" : 'black', "color" : 'white'}}>Patient Details</h5>
            <p className="card-text"><b>Patient Name : </b>{name}</p>
            <p className="card-text"><b>Hospital Name : </b>{hospitalName}</p>
            <p className="card-text"><b>Required Blood : </b>{bloodGroup}</p>
            <p className="card-text"><b>Contact : </b>{phone}</p>
            <p className="card-text"><b>Hospital Location : </b>{city}</p>
        </div>
    </div>
  )
}

export default Card
