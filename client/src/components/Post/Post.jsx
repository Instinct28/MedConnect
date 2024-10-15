import React, { useState } from 'react'

const Post = () => {

    const [formData, setFormData] = useState({"name":"","age":"","gender":"","phone":"","bloodGroup":"","hospitalName":"","city":"","date":""});

    const onChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value});
    }

    const handleSubmit = async () => {
        const response = await fetch('http://localhost:8000/patient/addPatient', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'token' : 'eyJhbGciOiJIUzI1NiJ9.NjZmNTQ4YjhkZjE4MzJkZTk3YTYyNjFj.hTzmjGrMKsReUm4Ati28yvFRJX-72sKbgxigFkDvB5Q'
            },
            body: JSON.stringify(formData)
        })
        const result = await response.json();
        console.log(result);
    }

  return (
    <div className='container mt-2'>
        <h3>Enter Patient Details</h3>
        <form onSubmit={handleSubmit}>
            <div className="my-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" name='name' value={formData.name} className="form-control" onChange={(event) => onChange(event)} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" name='age' value={formData.age} className="form-control" onChange={(event) => onChange(event)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <input type="text" name='gender' value={formData.gender} className="form-control" onChange={(event) => onChange(event)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="text" name='phone' value={formData.phone} className="form-control" onChange={(event) => onChange(event)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
                <input type="text" name='bloodGroup' value={formData.bloodGroup} className="form-control" onChange={(event) => onChange(event)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="hospital" className="form-label">Hospital</label>
                <input type="text" name='hospitalName' value={formData.hospitalName} className="form-control" onChange={(event) => onChange(event)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" name='city' value={formData.city} className="form-control" onChange={(event) => onChange(event)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date of Admission</label>
                <input type="Date" name='date' value={formData.date} className="form-control" onChange={(event) => onChange(event)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Post
