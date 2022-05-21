
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import ExplainCode from './components/ExplainCode'

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
    <div className="">
      <nav>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
      <main>
        <div className="stage" style={{ textAlign: 'center' }}>
          <ExplainCode />
          {/* <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter a Topic" />
            <input type="submit" value="Generate names" />
          </form>

          <h3>Topic:</h3>
          <p>
            {apiData.userInput}
          </p>
          <h3>Fun Fact:</h3>
          <p>
            {isLoading ? `Loading...Please Wait` : apiData.response}
            {/* {apiData.response} */}

          {/* </p> */}
        </div>

      </main>

      <footer style={{ textAlign: 'center' }}>
        <h5>
          Created by Kamyar Mivehchi 2022
        </h5>
      </footer>
    </div>
  );
}

export default App;
