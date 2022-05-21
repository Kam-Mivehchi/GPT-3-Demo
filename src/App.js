
import './App.css';
import { useState } from "react";
import axios from 'axios'

function App() {
  const [result, setResult] = useState({ userInput: 'Enter something', response: "you see the response here" })
  const onSubmit = async (e) => {
    console.log(e.target, e.target[0].value)
    e.preventDefault()
    if (!e.target[0].value) {
      return;
    }
    const userInput = e.target[0].value;
    e.target[0].value = ''
    const req = JSON.stringify({
      "prompt": `Summarize this for a second-grade student:\n\n${userInput}`,
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
      setResult({ userInput, response: res.data.choices[0].text })

    }).catch((error) => {
      console.log(error);
    });

  }


  return (
    <div className="">
      <nav>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Enter a Prompt" />
          <input type="submit" value="Generate names" />
        </form>
      </nav>
      <main>
        <p>
          {result.userInput}
        </p>
        <p>
          {result.response}
        </p>

      </main>

      <footer style={{ textAlign: 'center' }}>
        Created by Kamyar Mivehchi 2022
      </footer>
    </div>
  );
}

export default App;
