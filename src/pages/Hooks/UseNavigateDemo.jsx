import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const UseNavigateDemo = () => {
  const navigate = useNavigate();
  const userLogin = useRef({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { id, value } = e.target;
    userLogin.current[id] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userLogin.current.email === "cybersoft" &&
      userLogin.current.password === "123"
    ) {
      //chuyển hướng trang a
      navigate("/profile");
    } else {
      //chuyển hướng trang b
      navigate("/forgot-pass");
    }
  };
  return (
    <div className="container d-flex justify-content-center align-item-center">
      <div className="mt-3 card w-25">
        <div className="bg-dark text-white text-center">
          <h3>Login</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p>email</p>
              <input
                className="form-control"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <p>password</p>
              <input
                className="form-control"
                id="password"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary text-center mt-2 w-100">
                Login Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UseNavigateDemo;
