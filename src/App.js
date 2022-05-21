
import './App.css';
import { useState } from "react";
import axios from 'axios'

import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [result, setResult] = useState({ userInput: 'Enter something', response: "you see the response here" })

  const presets = ['Animals', 'Space', 'Earth', 'Science', 'Health', 'Ocean', 'Travel']

  const onSubmit = async (e) => {
    console.log(e)
    e.preventDefault()
    if (!e.target[0].value) {
      return;
    }
    apiCall(e.target[0].value);
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

  const apiCall = async (userInput) => {

    const req = JSON.stringify({
      "prompt": ` \n\n${userInput} Here's what the above class is doing:\n1.`,
      "max_tokens": 1000,
      "temperature": 1,
      "top_p": 1,
      "frequency_penalty": 0,
      "presence_penalty": 0
    });
    const configuration = {
      method: 'post',
      url: `https://api.openai.com/v1/engines/text-curie-001/completions`,
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY
          }`,
        'Content-Type': 'application/json'
      },
      data: req
    };

    axios(configuration).then(function (res) {
      setResult({ userInput, response: `${res.data.choices[0].text}` })
      console.log(res.data)

    }).catch((error) => {
      console.log(error);
    });

  }


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
            {result.userInput}
          </p>
          <h3>Fun Fact:</h3>
          <p>
            {result.response}
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
