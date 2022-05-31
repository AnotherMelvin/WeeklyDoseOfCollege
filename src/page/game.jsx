import React, { useState, useEffect } from "react";
import logo from '../assets/logo.png';
import eatIcon from '../assets/icon/eat.png';
import playIcon from '../assets/icon/play.png';
import workIcon from '../assets/icon/work.png';
import sleepIcon from '../assets/icon/sleep.png';
import studyIcon from '../assets/icon/study.png';

import avatar1 from '../avatar/Steve_Idle.png';
import avatar1Eat from '../avatar/Steve_Eat.png';
import avatar1Play from '../avatar/Steve_Play.png';
import avatar1Work from '../avatar/Steve_Work.png';
import avatar1Sleep from '../avatar/Steve_Sleep.png';
import avatar1Study from '../avatar/Steve_Study.png';

import avatar2 from '../avatar/Alex_Idle.png';
import avatar2Eat from '../avatar/Alex_Eat.png';
import avatar2Play from '../avatar/Alex_Play.png';
import avatar2Work from '../avatar/Alex_Work.png';
import avatar2Sleep from '../avatar/Alex_Sleep.png';
import avatar2Study from '../avatar/Alex_Study.png';

import home from '../assets/place/house.jpg';
import school from '../assets/place/school.jpg';
import gym from '../assets/place/gym.jpg';
import supermarket from '../assets/place/supermarket.jpg';

export default function Game(props) {
  const [study, setStudy] = useState(0);
  const [eat, setEat] = useState(50);
  const [play, setPlay] = useState(50);
  const [work, setWork] = useState(50);
  const [sleep, setSleep] = useState(50);
  
  let studyBar = study + "%";
  let eatBar = eat + "%";
  let playBar = play + "%";
  let workBar = work + "%";
  let sleepBar = sleep + "%";

  const day = [
    "Sunday",      // 0
    "Monday",      // 1
    "Tuesday",     // 2
    "Wednesday",   // 3
    "Thursday",    // 4
    "Friday",      // 5
    "Saturday"];   // 6

  const [avatarNow, setAvatarNow] = useState(props.avatar);
  const avatar = [
    avatar1,       // 0
    avatar2,       // 1
    avatar1Eat,    // 2
    avatar1Play,   // 3
    avatar1Work,   // 4
    avatar1Sleep,  // 5
    avatar1Study,  // 6
    avatar2Eat,    // 7
    avatar2Play,   // 8
    avatar2Work,   // 9
    avatar2Sleep,  // 10
    avatar2Study]; // 11
  
  const timeSelect = [];
  const greetSelect = ["Morning", "Afternoon", "Evening", "Night"];
  const placeSelect = [home, school, gym, supermarket];
  const weatherSelect = [];

  const [time, setTime] = useState(0);
  const [greet, setGreet] = useState(0);
  const [place, setPlace] = useState(0);
  const [weather, setWeather] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  // Subtract Status
  function subStudy(amount) {
    setStudy(study - amount);
  }

  function subEat(amount) {
    setEat(eat - amount);
  }

  function subPlay(amount) {
    setPlay(play - amount);
  }

  function subWork(amount) {
    setWork(work - amount);
  }

  function subSleep(amount) {
    setSleep(sleep - amount);
  }

  function subStudy(amount) {
    setStudy(study - amount);
  }

  // Add Status
  function addEat(amount) {
    setEat(eat + amount);
    subWork(5);

    if (props.avatar === 0) {
      setAvatarNow(2);
      setTimeout(() => {
        setAvatarNow(0);
      }, 2000);
    } else {
      setAvatarNow(7);
      setTimeout(() => {
        setAvatarNow(1);
      }, 2000);
    }
    
  }

  function addPlay(amount) {
    setPlay(play + amount);
    subEat(5);
    subSleep(5);

    if (props.avatar === 0) {
      setAvatarNow(3);
      setTimeout(() => {
        setAvatarNow(0);
      }, 2000);
    } else {
      setAvatarNow(8);
      setTimeout(() => {
        setAvatarNow(1);
      }, 2000);
    }
  }

  function addWork(amount) {
    setWork(work + amount);
    subSleep(5);
    subEat(5);

    if (props.avatar === 0) {
      setAvatarNow(4);
      setTimeout(() => {
        setAvatarNow(0);
      }, 2000);
    } else {
      setAvatarNow(9);
      setTimeout(() => {
        setAvatarNow(1);
      }, 2000);
    }
  }

  function addSleep(amount) {
    setSleep(sleep + amount);
    subWork(5);

    if (props.avatar === 0) {
      setAvatarNow(5);
      setTimeout(() => {
        setAvatarNow(0);
      }, 2000);
    } else {
      setAvatarNow(10);
      setTimeout(() => {
        setAvatarNow(1);
      }, 2000);
    }
  }

  function addStudy(amount) {
    setStudy(study + amount);
    subEat(5);
    subPlay(5);
    subWork(5);
    subSleep(5);

    if (props.avatar === 0) {
      setAvatarNow(6);
      setTimeout(() => {
        setAvatarNow(0);
      }, 2000);
    } else {
      setAvatarNow(11);
      setTimeout(() => {
        setAvatarNow(1);
      }, 2000);
    }
  }

  // Switch Place
  function placeSwitch(event) {
    setPlace(event.target.value);
  }

  // Set Button
  const [info1, setInfo1] = useState("Eat");
  const [info2, setInfo2] = useState("Play");
  const [info3, setInfo3] = useState("Sleep");
  const [info4, setInfo4] = useState("Study");

  useEffect(() => {
    if (place == 0) {
      setInfo1("Eat");
      setInfo2("Play");
      setInfo3("Sleep");
      setInfo4("Study");
    } else if (place == 1) {
      setInfo1("Class 1");
      setInfo2("Class 2");
      setInfo3("Eat");
      setInfo4("Rest");
    } else if (place == 2) {
      setInfo1("Work 1");
      setInfo2("Work 2");
      setInfo3("Work 3");
      setInfo4("Work 4");
    } else {
      setInfo1("Buy");
      setInfo2("Buy");
      setInfo3("Buy");
      setInfo4("Buy");
    }
  }, [place]);

  function action1() {
    if (place == 0) {
      addEat(5);
    } else if (place == 1) {
      addStudy(5);
    } else if (place == 2) {
      addWork(5);
    } else {
      addEat(5);
    }
  }

  function action2() {
    if (place == 0) {
      addPlay(5);
    } else if (place == 1) {
      addStudy(10);
    } else if (place == 2) {
      addWork(10);
    } else {
      addEat(10);
    }
  }

  function action3() {
    if (place == 0) {
      addSleep(10);
    } else if (place == 1) {
      addEat(5);
    } else if (place == 2) {
      addWork(15);
    } else {
      addEat(15);
    }
  }

  function action4() {
    if (place == 0) {
      addStudy(5);
    } else if (place == 1) {
      addPlay(5);
    } else if (place == 2) {
      addWork(20);
    } else {
      addEat(20);
    }
  }

  // Components
  function Status(props) {
    return (
      <div className="progress-container">
        <img 
        src={props.icon} 
        alt="icon" 
        className="me-3"
        style={{width: "30px"}} />
        <div 
          className="progress ms-1 mt-1" 
          style={{width: "200px", height: "20px"}}>
          <div 
            className="progress-bar" 
            role="progressbar" 
            style={{width: props.bar}}
            aria-valuenow={props.value} 
            aria-valuemin="0" 
            aria-valuemax="100">
          </div>
        </div>
      </div>
    );
  }

  function ActButton(props) {
    return (
      <button
        type="button" 
        className="btn btn-primary m-4 px-4"
        onClick={() => {
          props.act();
        }} >
        {props.info}
      </button>
    );
  }

  function Clock() {
    
  }

  return (
    <div className="container-fluid">
      <img 
        src={logo} 
        alt="logo" 
        className="mt-3" 
        style={{width: "30px"}} />
			<h6>Weekly Dose of College</h6>
			<hr />

      <div className="d-flex row">
        <div className="col-md-4">
          <select 
            id="select-major" 
            class="form-select mb-3"
            onChange={placeSwitch} >
            <option selected value="0">Rumah</option>
            <option value="1">Kampus</option>
            <option value="2">Gym</option>
            <option value="3">Supermarket</option>
          </select>
        </div>

        <div className="col-md-4">
          <div className="status-bar">
            <Status icon={eatIcon} bar={eatBar} value={eat} />
            <Status icon={playIcon} bar={playBar} value={play} />
            <Status icon={workIcon} bar={workBar} value={work} />
            <Status icon={sleepIcon} bar={sleepBar} value={sleep} />
            <Status icon={studyIcon} bar={studyBar} value={study} />
          </div>
        </div>

        <div className="col-md-4">
          <div>
            <ActButton act={action1} info={info1} />
            <ActButton act={action2} info={info2} />
            <ActButton act={action3} info={info3} />
            <ActButton act={action4} info={info4} />
          </div>
        </div>
      </div>

      <div className="d-flex row">
        <div className="col-md-4">
          <h3>News API</h3>
        </div>

        <div className="col-md-4">
          <img 
            src={avatar[avatarNow]} 
            className="py-3"
            style={{width: "200px"}} />
        </div>

        <div className="col-md-4">
          <h3>Clock & Weather</h3>
        </div>
      </div>

      <div className="d-flex row">
        <div className="col-md-4">
          <h6>Good {greetSelect[greet]}, {props.name}!</h6>
          <p>Major: {props.major}</p>
        </div>

        <div className="col-md-4">
        
        </div>

        <div className="col-md-4">
          <div>
            <button 
            type="submit" 
            className="start-button btn btn-primary my-4 p-2"
            onClick={() => {
              props.changePage(0);
            }} >
              Back
            </button>
          </div>
        </div>
      </div>
      
      <img 
        src={placeSelect[place]} 
        className="py-3"
        style={{width: "300px"}} />
    </div>
  );
}