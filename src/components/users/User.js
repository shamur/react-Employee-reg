import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    Phone: "",
    Email: "",
    EmployeeId: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">First name: {user.Firstname}</li>
        <li className="list-group-item">Last name: {user.Lastname}</li>
        <li className="list-group-item">Phone: {user.Phone}</li>
        <li className="list-group-item">Email: {user.Email}</li>
        <li className="list-group-item">EmployeeId: {user.EmployeeId}</li>
      </ul>
    </div>
  );
};

export default User;
