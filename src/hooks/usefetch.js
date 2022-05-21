import { useEffect, useState } from "react";
import axios from 'axios'

const useFetch = ((prompt) => {

    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState({ userInput: 'Enter something', response: "you see the response here" });
    const [serverError, setServerError] = useState(null);
    useEffect(() => {
        const apiCall = async () => {

            const req = JSON.stringify({
                "prompt": prompt,
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
                setApiData({ prompt, response: `${res.data.choices[0].text}` })
                console.log(apiData)
                setIsLoading(false);

            }).catch((error) => {
                setServerError(error)
                console.log(serverError);
                setIsLoading(false);
            });

        }
        apiCall();
    }, [prompt])

    return { isLoading, apiData, serverError }
}
)

export default useFetch
