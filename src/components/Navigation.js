import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
function Navigation() {
    return (
        <nav className="w-100 " >
            <Navbar bg="none" expand="md" className="custom " style={{ zIndex: '999' }}>
                <Container  >
                    <Navbar.Brand className="font-weight-black" style={{ fontSize: '2rem', fontWeight: '600', color: '#8B5CF6' }}>{`Confused Coder`}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav text-shadow ">
                        <Nav className="mt-2 h4" >
                            <Nav.Link href="https://github.com/Kam-Mivehchi" target="_blank" rel="noopener noreferrer" className=" "><BsGithub className="boxShadow rounded-circle" /></Nav.Link>
                            <Nav.Link href="https://linkedin.com/in/kamyar-mivehchi" target="_blank" rel="noopener noreferrer" className="  textShadow"><BsLinkedin className="boxShadow tex " /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav >
    )
}

export default Navigation