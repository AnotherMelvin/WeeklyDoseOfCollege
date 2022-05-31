import React from 'react';
import logo from '../assets/logo.png';

export default function About(props) {
  return (
    <div className="container-fluid">
      <img
          src={logo}
          alt="logo"
          className="mt-3"
          style={{ width: "100px" }} />
      <h2>Weekly Dose of College</h2>
      <hr />
        <div>
            <h3>About Us</h3>
            <div class="text-start">
				<h3>
					This game project was made by the 
					<b>JawaScript</b> group. This game is made with HTML, CSS
					(Bootstrap), and JavaScript (JQuery). The project was
					inspired by a daily college student grinding his score for
					their semester exam.
				</h3>
				<hr />
				<h2>How to Play</h2>
				<p>
					Choose an avatar then enter your name. Click play and start
					playing!<br />
					Your goal is to pass college on the 8th semester!<br /><br />
					There are 4 essential bars that you have to pay
					attention:<br />
				</p>
				<ul>
					<li>Food</li>
					<li>Energy</li>
					<li>Playing</li>
					<li>Health</li>
				</ul>
				<p>
					If any of these reaches 0, then it's game over.<br />

					The study progress bar indicates how much you've studied. If
					it reaches 100%, then you go to the next semester. 
					If you don't study at least once per day, then you will get a warning letter. 
					Getting 3 warning letters means you are getting dropped out.<br /><br />
					There are 5 actions that you can do:<br />
				</p>
				<ul>
					<li>
						Eat - increases food bar but decreases exercise bar
						slightly
					</li>
					<li>
						Play - increases playing bar but decreases exercise and
						sleep bar slightly
					</li>
					<li>
						Sleep - only allowed to sleep at night, effects depends
						on how early/late the player goes to sleep
					</li>
					<li>
						Exercise - increases health bar but decreases energy bar
						slightly and food bar significantly
					</li>
					<li>
						Study - increases study progress but decreases other
						bars slightly
					</li>
				</ul>

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
  );
}