import React, { useState } from "react";

import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    Phone: "",  
    Email: "",
    EmployeeId: ""
  });

  const { Firstname, Lastname, Phone, Email, EmployeeId } = user;
  const onInputChange = e => {
    var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
    setUser({ ...user, [e.target.name]: e.target.value , [EmployeeId]:"e"+RandomNumber});
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Employee</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your First Name"
              name="Firstname"
              value={Firstname}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Last Name"
              name="Lastname"
              value={Lastname}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control form-control-lg"
              pattern="^\d{10}$"
              title="mobile number should have 10 digits"
              placeholder="Enter Your Phone Number"
              name="Phone"
              value={Phone}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
       
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="Email"
              value={Email}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <label> Tap to change EmployeeId</label>

            <input
              type="button"
              className="form-control form-control-lg"
              placeholder="Enter Your EmployeeId"
              name="EmployeeId"
              value=  {"e"+ Math.floor(Math.random() * 10) + 1}
              onClick={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
