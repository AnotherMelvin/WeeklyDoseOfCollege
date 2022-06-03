import React, { useEffect, useState } from 'react';

import room from '../assets/room.gif';
import logo from '../assets/logo.png';
import prev from '../assets/previous.png';
import next from '../assets/next.png';
import avatar1 from '../avatar/Steve_Idle.png';
import avatar2 from '../avatar/Alex_Idle.png';

export default function Index(props) {
  const avatar = [avatar1, avatar2];
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [major, setMajor] = useState(null);
  const [error, setError] = useState("");
  function enterName(event) {
      setName(event.target.value);
  }

  function enterMajor(event) {
      setMajor(event.target.value);
  }

  useEffect(() => {
      if (index < 0) setIndex(1);
      else if (index > 1) setIndex(0);
  }, [index]);

  return (
    <div 
      className="main-canvas" 
      style={{
        backgroundImage: `url(${room})`,
        backgroundRepeat: "no-repeat"}}>
      <div className="overlay">
        <div className="container-fluid">
          <img
            src={logo}
            alt="logo"
            className="mt-3"
            style={{ width: "100px" }} />
          <h2>Weekly Dose of College</h2>
          <hr />

          <div className="d-flex row my-5 py-3">
            <div className="col-md-6">
              <h2>User Customization</h2>
              <p className="error-message">{error}</p>

              <form className="pt-2">
                <input
                  className="form-control my-3"
                  id="username"
                  placeholder="Enter your name here..."
                  value={name}
                  onChange={enterName} />

                <select
                  id="select-major"
                  class="form-select mb-3"
                  onChange={enterMajor} >
                  <option value="0" disabled selected>Major</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Information System">Information System</option>
                  <option value="Computer Engineering">Computer Engineering</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Engineering Physics">Engineering Physics</option>
                </select>

                <div id="button-row">
                  <button
                    type="submit"
                    className="start-button btn btn-primary mb-4 p-2"
                    onClick={() => {
                      props.changePage(2);
                    }} >
                    About
                  </button>

                  <button
                    type="submit"
                    className="start-button btn btn-primary mb-4 p-2"
                    onClick={(e) => {
                      if (name === "" || major === null) {
                        e.preventDefault();
                        setError("Select your username or major!");
                        setTimeout(() => {
                          setError("");
                        }, 2000);
                      } else {
                        props.changePage(1);
                        props.setProfile(name, major, index);
                      }
                    }} >
                    Play
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-6">
              <h2>Select Avatar</h2>

              <div className="d-flex row">
                <div className="col-xl-4">
                  <input
                    type="image"
                    src={prev}
                    alt="prevlogo"
                    className="py-xl-5"
                    onClick={() => {
                      setIndex(index - 1);
                    }}
                    style={{ width: "70px" }} />
                </div>

                <div className="col-xl-4">
                  <img
                    src={avatar[index]}
                    className="py-3"
                    style={{ width: "200px" }} />
                </div>

                <div className="col-xl-4">
                  <input
                    type="image"
                    src={next}
                    alt="nextlogo"
                    className="py-xl-5"
                    onClick={() => {
                      setIndex(index + 1);
                    }}
                    style={{ width: "70px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}