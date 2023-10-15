import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [userErr, setUserErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    // Prevent default behaviour of form on submit
    e.preventDefault();
    let userFlag = false;
    let passwordFlag = false;

    if (username === "") {
      setUserErr("Please enter username");
      userFlag = false;
    } else if (username.length < 5) {
      setUserErr("Username must be 5 character atleast");
      userFlag = false;
    } else {
      setUserErr("");
      userFlag = true;
    }

    if (password === "") {
      setPasswordErr("Please enter password");
      passwordFlag = false;
    } else if (password.length < 5) {
      setPasswordErr("Password must be 5 character atleast");
      passwordFlag = false;
    } else {
      setPasswordErr("");
      passwordFlag = true;
    }

    if (userFlag && passwordFlag) {
      localStorage.setItem("login-user", username);
      navigate("/");
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-sm-8 col-10 mx-auto">
              <form
                onSubmit={submitHandler}
                className="my-5"
                autoComplete="off"
              >
                <h3>Login</h3>
                <div className="form-group mb-3">
                  <label htmlFor="user">Username</label>
                  <input
                    id="user"
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Username"
                  />
                  <p className="error">{userErr && userErr}</p>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="user">Password</label>
                  <input
                    id="user"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                  />
                  <p className="error">{passwordErr && passwordErr}</p>
                </div>
                <button className="btn btn-Primary d-block mx-auto">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
