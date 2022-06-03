import React, { useState, useEffect } from "react";
import room from '../assets/room.gif';
import congratulations from '../assets/congratulations.gif';

export default function Endscreen(props) {
  const [background, setBackground] = useState(0);
  const [title, setTitle] = useState(0);
  const [subtitle, setSubtitle] = useState(0);
  const [message, setMessage] = useState(0);

  const backgroundSelect = [room, congratulations]
  const titleSelect = ["Game Over", "Congratulations!"];
  const subtitleSelect = ["You passed out", "You've passed your week of college"];
  const messageSelect = [
    "Better luck next time.",
    "Your performance is dropping, it's time to re-evaluate your life choice...",
    "Your performance is bellow average, stop being lazy all the time.",
    "Your performance is average, there's room for improvement in the future.",
    "Your performance is good, keep it up and try to be more active.",
    "Your performance is excellent, one of the best student ever!"
  ];

  let state = props.state;

  useEffect(() => {
    if (state == 0) {
      setBackground(0);
      setTitle(0);
      setSubtitle(0);
    } else if (state == 1) {
      setBackground(1);
      setTitle(1);
      setSubtitle(1);
    } else if (state == 2) {
      setBackground(1);
      setTitle(1);
      setSubtitle(1);
    } else if (state == 3) {
      setBackground(1);
      setTitle(1);
      setSubtitle(1);
    } else if (state == 4) {
      setBackground(1);
      setTitle(1);
      setSubtitle(1);
    } else if (state == 5) {
      setBackground(1);
      setTitle(1);
      setSubtitle(1);
    }

    setMessage(state);
  }, [state]);
  
  return (
    <div
      className="end-canvas" 
      style={{
        backgroundImage: `url(${backgroundSelect[background]})`,
        backgroundRepeat: "no-repeat"}}>
      <div className="end-overlay">
        <div className="container-fluid end-container">
          <div className="text-box">
            <h1 style={{fontSize: "52pt"}}>{titleSelect[title]}</h1>
            <h3>{subtitleSelect[subtitle]}</h3>
            <h6 className="mt-5">"{messageSelect[message]}"</h6>
          </div>
          
          <button 
            type="submit" 
            className="start-button btn btn-primary my-5 p-2"
            onClick={() => {props.changePage(0);}} >
            Back to Main
          </button>
        </div>
      </div>
    </div>
  );
}