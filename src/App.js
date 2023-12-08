import React, { useState } from 'react'
import Header from './Components/header';
import Hero from './Components/hero';
import Articles from './Components/articles';
import Modal from './Components/modal';

function App() {
  const [editShow, setEditShow] = useState(false);
  return (
    <>
      <Header editShow={editShow} setEditShow={setEditShow} />
      <Hero />
      <Articles />
      {editShow ? (<Modal />) : null}
    </>
  );
}

export default App;
