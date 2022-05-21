import { useEffect, useState } from "react";
import axios from 'axios'

const useFetch = ((prompt) => {


    const [apiData, setApiData] = useState('');
    const [serverError, setServerError] = useState(null);
    useEffect(() => {
        const apiCall = async () => {
            if (!prompt) {
                return
            }
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
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                data: req
            };

            axios(configuration).then(function (res) {
                setApiData(res.data.choices[0].text)
                console.log(apiData)


            }).catch((error) => {
                setServerError(error)
                console.log(serverError);

            });

        }
        apiCall();
    }, [prompt])

    return { apiData, serverError }
}
)

export default useFetch
