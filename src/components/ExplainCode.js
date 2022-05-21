import { useState } from "react";
import useFetch from '../hooks/usefetch';

const ExplainCode = () => {
    const [prompt, setPrompt] = useState({ userInput: 'Enter something', response: "you see the response here" })

    const { isLoading, serverError, apiData } = useFetch(
        `${prompt} + Here's what the above class is doing:\n1`

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
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter a Topic" />
                <input type="submit" value="Generate names" />
            </form>
            {/* {presets.map((topic) => {
            return (<button type="button" onClick={submitPreset} value={topic} >{topic}</button>)
          })} */}
            <h3>Your Code:</h3>
            <p>
                {prompt}
            </p>
            <h3>Here's what the code above is doing:</h3>
            <p>
                {apiData.response}
                {/* {apiData.response} */}
            </p>
        </>
    )
}


export default ExplainCode