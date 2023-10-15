import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const submitHadler = (e) => {
    e.preventDefault();

    console.log({ fname, lname, email, description });
  };

  return (
    <>
      <div className="contact my-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Contact us</h2>
              <h4>If any Queries</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
              <img src="./assets/images/img3.jpg" />
            </div>
            <div className="col-md-6">
              <form autoComplete="off" onSubmit={submitHadler}>
                <div className="form-group mb-3">
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="lastname">Lastname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="description">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
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

export default Contact;
