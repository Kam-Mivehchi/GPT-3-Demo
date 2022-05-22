
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import ExplainCode from './components/ExplainCode'

import Navigation from './components/Navigation'
function App() {

  return (
    <div className="max-h-screen backdrop" >
      <Navigation />
      <main className=' mx-auto my-4 ' style={{ maxHeight: '70%', }}>

        <ExplainCode />

      </main>

      <footer className="text-center bg-light font-weight-bold">


        <p className='my-1'>
          While you're here,
        </p>
        <p className='mt-1 mb-3'>
          Check out my <a href="https://kamyarmivehchi.com" className="accentText" target="_blank" rel="noopener noreferrer">Portfolio</a> and <a href="https://github.com/Kam-Mivehchi" className="accentText" target="_blank" rel="noopener noreferrer">Github</a>
        </p>
        Created by Kamyar Mivehchi
        <p>2022</p>
      </footer>
    </div >
  );
}

export default App;
