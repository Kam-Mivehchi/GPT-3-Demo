
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import ExplainCode from './components/ExplainCode'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
function App() {
  // const [prompt, setPrompt] = useState({ userInput: 'Enter something', response: "you see the response here" })

  // const { isLoading, serverError, apiData } = useFetch(
  //   `${prompt} Here's what the above class is doing:\n1`

  // );

  // const onSubmit = async (e) => {
  //   console.log(e)
  //   e.preventDefault()
  //   if (!e.target[0].value) {
  //     return;
  //   }
  //   setPrompt(e.target[0].value);
  //   e.target[0].value = ''
  // }
  // const submitPreset = async (e) => {
  //   console.log(e)
  //   e.preventDefault()
  //   if (!e.target.value) {
  //     return;
  //   }
  //   apiCall(e.target.value);

  // }



  return (
    <div className="max-h-screen gradient" >
      <nav className="w-100 " style={{}}>
        <Navbar bg="none" expand="md" className="custom " style={{ zIndex: '999' }}>
          <Container  >
            <Navbar.Brand className="textShadow " style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'white', }}>WhatAmIDoing.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav text-shadow">
              <Nav className="mt-1  " style={{ fontSize: '1.5rem ' }}>
                <Nav.Link href="https://github.com/Kam-Mivehchi" target="_blank" rel="noopener noreferrer" className="text-dark "><BsGithub className="boxShadow rounded-circle" /></Nav.Link>
                <Nav.Link href="https://linkedin.com/in/kamyar-mivehchi" target="_blank" rel="noopener noreferrer" className="  textShadow"><BsLinkedin className="boxShadow text-dark " /></Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </nav >
      <main className=' mx-auto my-4 ' style={{ maxHeight: '70%', }}>
        <section className="stage  " style={{ textAlign: 'center', }}>
          <ExplainCode />
        </section>

      </main>

      <footer className="text-center">


        <p className='my-1'>
          While you're here,
        </p>
        <p className='mt-1 mb-3'>
          Check out my <a href="https://kamyarmivehchi.com" target="_blank" rel="noopener noreferrer">Portfolio</a> and <a href="https://github.com/Kam-Mivehchi" target="_blank" rel="noopener noreferrer">Github</a>
        </p>
        Created by Kamyar Mivehchi
        <p>2022</p>
      </footer>
    </div >
  );
}

export default App;
