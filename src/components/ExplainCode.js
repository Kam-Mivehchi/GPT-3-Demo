import { useState } from "react";
import useFetch from '../hooks/usefetch';

const ExplainCode = () => {
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
    return (
        <>
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
        </>
    )
}


export default ExplainCode