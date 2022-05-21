import { useState, useEffect } from "react";
import useFetch from '../hooks/usefetch';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ExplainCode = () => {
    const [prompt, setPrompt] = useState(JSON.parse(localStorage.getItem('prompt')) || [])
    const [answer, setAnswer] = useState(JSON.parse(localStorage.getItem('answer')) || [])

    const { serverError, apiData } = useFetch(
        prompt ? `${prompt}  Here's what the above class is doing:\n1` : ''

    );

    const onSubmit = async (e) => {
        console.log(e)
        e.preventDefault()
        if (!e.target[0].value) {
            return;
        }
        setPrompt([`${e.target[0].value}`, ...prompt]);
        setAnswer([`${apiData}`, ...answer])
        e.target[0].value = ''
    }

    useEffect(() => {
        localStorage.setItem('prompt', JSON.stringify(prompt));
        localStorage.setItem('answer', JSON.stringify([...answer]));
    }, [prompt]);
    return (
        <>


            <Form onSubmit={onSubmit} style={{ width: '60vw', margin: 'auto' }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label as='h2'>Enter Your Code Here</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Enter Code Here" />
                    <Button className="my-2" type="submit" value="Generate names" >Explain it!</Button>
                </Form.Group>
            </Form>

            {prompt.map((inp, idx) => {

                return (
                    <>

                        <Card className="my-4" style={{ width: '80vw', margin: 'auto', borderRadius: '10px' }}>
                            <Card.Body>
                                <Card.Title as='h4'>Your Code:</Card.Title>
                                <Card.Text className="bg-dark  " style={{ textAlign: 'start', borderRadius: '10px' }}>
                                    <pre className='pre-scrollable text-white p-3' ><code style={{ whiteSpace: 'pre-line' }} > {inp}</code></pre>
                                </Card.Text>
                                <hr className='' />
                                <Card.Title as='h4' className="text-left">Here's what the code above is doing:</Card.Title>
                                <Card.Text >
                                    <pre className="wrap" style={{ fontFamily: 'roboto', textAlign: 'start' }}>
                                        {`1${answer[idx]}`}
                                    </pre>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </>
                )
            })}
        </>
    )
}


export default ExplainCode