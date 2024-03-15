import { useState } from 'react'
import './App.css'
import Sum from './components/sum';
import Navvbar from './components/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import {toplama} from './components/sum'
function App() {

  return (
    <>
      <Navvbar/>
      <Sum/>

    </>
  );
}

export default App
