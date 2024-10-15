import React from 'react';
import './Card.css';

const Card = (props) => {

    const {name, gender, date, age, city, phone, hospitalName, bloodGroup} = props;

  return (
    <div className='card'>
      <table>
        <tr>
            <td className='con'>
                <div className='heading'>Name</div>
                <div>{name}</div>
            </td>
            <td>
                <div className='heading'>Date</div>
                <div>{date}</div>
            </td>
        </tr>
        <tr>
            <td className='con'>
                <div className='heading'>Gender</div>
                <div>{gender}</div>
            </td>
            <td>
                <div className='heading'>City</div>
                <div>{city}</div>
            </td>
        </tr>
        <tr>
            <td className='con'>
                <div className='heading'>Age</div>
                <div>{age}</div>
            </td>
            <td>
                <div className='heading'>Hospital</div>
                <div>{hospitalName}</div>
            </td>
        </tr>
        <tr>
            <td className='con'>
                <div className='heading'>Phone</div>
                <div>{phone}</div>
            </td>
            <td>
                <div className='heading'>Blood Group</div>
                <div>{bloodGroup}</div>
            </td>
        </tr>
      </table>
    </div>
  )
}

export default Card
