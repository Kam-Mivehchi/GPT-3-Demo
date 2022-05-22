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
                <div className="w-50 mx-auto  ">
                    <h4 className='text-black'>Don't know what your doing? </h4>
                    <h2 className='accentText'>You've come to the right place</h2>
                    <p>Confused Coder utilizes Open Ai's machine learning engine to quickly convert any languages code into plain english.</p>
                    <p>By leveraging this robust API, this application allows any developer, to simply <span className="accentText font-weight-bold"> copy and paste </span> any code you don't understand and instantly see what its doing.</p>

                </div>
                <hr className="bg-secondary" />
                <Form onSubmit={onSubmit} className='row  ' style={{}}>
                    <Form.Group className="my-3 col-12 col-md-8 mx-auto " controlId="exampleForm.ControlTextarea1">
                        <Form.Label as='h2' className='text-secondary font-weight-bold'>Paste Your Code Here</Form.Label>
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
            <div className=" boxShadow px-5 bg-light w-100 mx-md-5 flex align-items-center container border-10 mx-auto" style={{ width: '50%', height: '80vh', overflowY: 'scroll' }}>

                {prompt.map((inp, idx) => {

                    return (
                        <>
                            <Card className="my-4 p-3 text-left cardbackdrop boxShadow border-0" style={{ width: '100%', margin: 'auto', borderRadius: '10px' }}>
                                <Card.Body>
                                    <Card.Title as='h2' className=" text-secondary font-weight-bold cursive">Your Code:</Card.Title>
                                    <Card.Text className="bg-dark border-10 text-left" >
                                        <pre className='pre-scrollable text-white p-3' ><code style={{ whiteSpace: 'pre-line' }} > {inp}</code></pre>
                                    </Card.Text>
                                    <hr className='' />
                                    <Card.Title as='h2' className=" accentText font-weight-bold cursive ">Analysis:</Card.Title>
                                    <Card.Text >
                                        <pre className="wrap font-weight-bold h6" style={{ fontFamily: 'dosis', textAlign: 'start' }}>
                                            {`1${answer[idx]}`}
                                        </pre>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <hr className='accent  ' />
                        </>
                    )
                })}
            </div>
        </div >
    )
}


export default ExplainCode