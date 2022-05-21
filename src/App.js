
import './App.css';
import { useState } from "react";
import axios from 'axios'
import useFetch from './hooks/usefetch';
import { Routes, Route, Link } from "react-router-dom";
import ExplainCode from './components/ExplainCode'
function App() {
  const [prompt, setPrompt] = useState({ userInput: 'Enter something', response: "you see the response here" })

  const { isLoading, serverError, apiData } = useFetch(
    `${prompt} Here's what the above class is doing:\n1`

  );

  const onSubmit = async (e) => {
    console.log(e)
    e.preventDefault()
    if (!e.target[0].value) {
      return;
    }
    setPrompt(e.target[0].value);
    e.target[0].value = ''
  }
  // const submitPreset = async (e) => {
  //   console.log(e)
  //   e.preventDefault()
  //   if (!e.target.value) {
  //     return;
  //   }
  //   apiCall(e.target.value);

  // }



  return (
    <div className="">
      <nav>

      </nav>
      <main>
        <div className="stage" style={{ textAlign: 'center' }}>

          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter a Topic" />
            <input type="submit" value="Generate names" />
          </form>
          {/* {presets.map((topic) => {
            return (<button type="button" onClick={submitPreset} value={topic} >{topic}</button>)
          })} */}
          <h3>Topic:</h3>
          <p>
            {apiData.userInput}
          </p>
          <h3>Fun Fact:</h3>
          <p>
            {isLoading ? `Loading...Please Wait` : apiData.response}
            {/* {apiData.response} */}
          </p>
        </div>

      </main>

      <footer style={{ textAlign: 'center' }}>
        <h5>
          Created by Kamyar Mivehchi 2022
        </h5>
      </footer>
    </div>
  );
}

export default App;
