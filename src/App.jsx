import React, { useState } from 'react';
import Index from './page/index';
import Game from './page/game';
import About from './page/about';
import Endscreen from './page/endscreen';

function App() {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [avatar, setAvatar] = useState(0);
  const [endState, setEndState] = useState(0);

  function pageSelect(index) {
    setPage(index);
  }

  function profileSelect(username, usermajor, useravatar) {
    setName(username);
    setMajor(usermajor);
    setAvatar(useravatar);
  }

  function endSelect(state) {
    setEndState(state);
  }
  
  return (
    <main>
      {page === 0 ? 
      <Index 
        changePage={pageSelect} 
        setProfile={profileSelect} /> : null}
      {page === 1 ? 
      <Game 
        changePage={pageSelect}
        end={endSelect}
        name={name}
        major={major} 
        avatar={avatar} /> : null}
      {page === 2 ? 
      <About 
        changePage={pageSelect} /> : null}
      {page === 3 ? 
      <Endscreen 
        changePage={pageSelect}
        state={endState} /> : null}
    </main>
  );
}

export default App;