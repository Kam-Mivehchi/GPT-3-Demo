import { useState, useEffect } from "react";
import useFetch from '../hooks/usefetch';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ExplainCode = () => {
    const [prompt, setPrompt] = useState(JSON.parse(localStorage.getItem('prompt')) || [])
    const [answer, setAnswer] = useState(JSON.parse(localStorage.getItem('answer')) || [])

    const { apiData } = useFetch(
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
        <div className=' d-flex justify-content-between flex-column flex-md-row align-items-center mx-4 '>
            <Form onSubmit={onSubmit} className='row mx-auto w-100 ' style={{}}>
                <Form.Group className="mb-3 col-12 col-md-8 mx-auto" controlId="exampleForm.ControlTextarea1">
                    <Form.Label as='h2'>Enter Your Code Here</Form.Label>
                    <Form.Control as="textarea" rows={8} placeholder="Enter Code Here" className='border-10' />
                    <Button className="my-2" type="submit" value="Generate names" >Explain it!</Button>
                    <Button className="my-2" onClick={() => {
                        localStorage.clear()
                        window.location.reload()
                    }} >Clear History</Button>
                </Form.Group>
            </Form>
            <div className=" border  w-100 mx-5 flex align-items-center container border-10" style={{ width: '50%', height: '80vh', overflowY: 'scroll', }}>

                {prompt.map((inp, idx) => {

                    return (
                        <>
                            <Card className="my-4 text-left" style={{ width: '100%', margin: 'auto', borderRadius: '10px' }}>
                                <Card.Body>
                                    <Card.Title as='h5'>Your Code:</Card.Title>
                                    <Card.Text className="bg-dark border-10 text-left" >
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
            </div>
        </div >
    )
}


export default ExplainCode