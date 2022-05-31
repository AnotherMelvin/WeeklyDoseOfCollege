import React, { useState } from 'react';
import Index from './page/index';
import Game from './page/game';
import About from './page/about';

function App() {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [avatar, setAvatar] = useState(0);

  function pageSelect(index) {
    setPage(index);
  }

  function profileSelect(username, usermajor, useravatar) {
    setName(username);
    setMajor(usermajor);
    setAvatar(useravatar);
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
        name={name}
        major={major} 
        avatar={avatar} /> : null}
      {page === 2 ? 
      <About 
        changePage={pageSelect} /> : null}
    </main>
  );
}

export default App;