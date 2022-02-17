import React, { useEffect } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
