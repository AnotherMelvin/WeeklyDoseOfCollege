import React from 'react';
import room from '../assets/room.gif';
import logo from '../assets/logo.png';

export default function About(props) {
  return (
    <div 
      className="about-canvas"
      style={{
        backgroundImage: `url(${room})`,
        backgroundRepeat: "no-repeat"}} >
      <div className="about-overlay">
        <div className="container-fluid">
          <img
            src={logo}
            alt="logo"
            className="mt-3"
            style={{ width: "100px" }} />
          <h2>Weekly Dose of College</h2>
          <hr />
            <div>
              <h1>About Us</h1>
              <h3>
					      This game project was made by the <b>JawaScript</b> group.
				      </h3>
              <div class="text-start">
				        <hr />
				        <h2>How to Play</h2>
				        <p>
					        At the home menu, feel free to create and customize your personal avatar.<br />
After you are satisfied with your own customization, you can now play the game by clicking the <b>Play</b> button
					        <br /><br />
					        There are 4 essential status' that you must pay attention to
                            <ul>
                                <li>Hunger - Eat to decrease hunger or go out and buy food. Try to not starve!</li>
                                <li>Boredom - Play games to recover!</li>
                                <li>Fitness - Go to the gym and workout!</li>
                                <li>Stamina - Sleep to prevent further stamina loss</li>
                            </ul>
You also must study to progress. Study at home or go to the campus to increase your status!<br /><br />
                            If any of the 4 essential status reaches 0, then it's game over!<br />
If you successfully reach the 7th day, then you win! You will also get a life prediction based on your final status conditions.
				        </p>

				        <h2>Built With</h2>
				        <ul>
					        <li><a href="https://getbootstrap.com">Bootstrap</a></li>
					        <li><a href="https://reactjs.org/">React</a></li>
				        </ul>

				        <h2>Asset Sources</h2>
				        <ul>
					        <li><a href="https://www.flaticon.com/">flaticon</a></li>
					        <li><a href="https://www.icons8.com/">icons8</a></li>
					        <li><a href="https://minecraft.fandom.com/wiki/Player#Skin_variations">Avatar</a></li>
				        </ul>

				        <h2>Members</h2>
				        <ol>
					        <li>Stefanus Andrian Leoandi (00000055662)</li>
					        <li>Melvin Tungadi (00000056010)</li>
					        <li>Valeryo Kenaldhie Salim (00000056335)</li>
					        <li>Steven Indriano (00000057217)</li>
				        </ol>

				        <p align="right">(<a href="#top">back to top</a>)</p>
			        </div>
            </div>
          <button 
            type="submit" 
            className="start-button btn btn-primary my-4 p-2"
            onClick={() => {props.changePage(0);}} >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}