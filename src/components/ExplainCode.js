import { useState, useEffect } from "react";
import useFetch from '../hooks/usefetch';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Results from './Results'
import About from './About'
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
        <main className=' mx-auto my-4 ' style={{ maxHeight: '70%', }}>
            <div className=' d-flex justify-content-between flex-column flex-lg-row align-items-start mx-4 '>
                <div className="flex flex-column w-100  text-center my-auto">
                    <About />
                    <hr className="bg-secondary" />
                    <Form onSubmit={onSubmit} className='row'>
                        <Form.Group className="my-3 col-12 col-md-8 mx-auto " controlId="exampleForm.ControlTextarea1">
                            <Form.Label as='h2' className='text-secondary font-weight-bold'>Paste Your Code Below</Form.Label>
                            <Form.Control as="textarea" rows={8} placeholder="Enter Code Here" className='border-10 my-4 font-weight-bold' />
                            <div className="d-flex flex-column  ">
                                <Button className=" accent border-10 w-50 mx-auto mb-2 px-5 py-2 font-weight-bold " type="submit" value="Generate names" >Explain my Code!</Button>
                                <Button className="border-10  py-0 w-25 mx-auto bg-secondary border-secondary" onClick={() => {
                                    localStorage.clear()
                                    window.location.reload()
                                }} >Clear History</Button>
                            </div>
                        </Form.Group>
                    </Form>
                </div>
                <Results prompt={prompt} answer={answer} />
            </div >
        </main>
    )
}


export default ExplainCode