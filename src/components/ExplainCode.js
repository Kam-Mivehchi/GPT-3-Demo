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
        <div className=' d-flex justify-content-between flex-column flex-lg-row align-items-start mx-4 '>
            <div className="flex flex-column w-100  text-center my-auto">
                <div className="w-75 mx-auto  ">
                    <h4 className='text-white'>Don't know what your doing? </h4>
                    <h2 className='accentText'>You've come to the right place</h2>


                    <p >
                        WhatAmIDoing.com utilizes Open Ai's machine learning engine to quickly convert any languages code into plain english.
                        This robust API allows for you, the user, to simply copy and paste any code you don't understand and instantly see what its doing.
                    </p>
                    <p>
                        This application was built with future development in mind. A custom fetch hook, which utilizes axios http requests, allows for additional prompts to easily be added down the line
                    </p>
                </div>
                <hr />
                <Form onSubmit={onSubmit} className='row  ' style={{}}>
                    <Form.Group className="my-3 col-12 col-md-8 mx-auto" controlId="exampleForm.ControlTextarea1">
                        <Form.Label as='h2'>Paste Your Code Here</Form.Label>
                        <Form.Control as="textarea" rows={8} placeholder="Enter Code Here" className='border-10 my-4 ' />
                        <div className="d-flex flex-column ">

                            <Button className=" accent border-10 w-75 mx-auto mb-2 px-5 py-2  " type="submit" value="Generate names" >Explain it!</Button>
                            <Button className="border-10  py-0 w-25 mx-auto bg-secondary border-secondary" onClick={() => {
                                localStorage.clear()
                                window.location.reload()
                            }} >Clear History</Button>
                        </div>
                    </Form.Group>
                </Form>
            </div>
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