import React, { useEffect, useState } from 'react';
import Card from './Card';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/patient/getAllPatient').then((res) => {
            return res.json();
        }).then((res) => {
            setData(res.patient);
            console.log(res.patient)
        }).catch((err) => {
            console.log("Error : ",err);
        })
    }, [])
    

  return (
    <div className='container'>
        <div className='d-flex justify-content-around flex-wrap'>
            {
                data.map((element) => {
                    return(
                        <Card key={element._id} name={element.name} email={element.email} city={element.city} phone={element.phone} bloodGroup={element.bloodGroup} hospitalName={element.hospitalName}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home
