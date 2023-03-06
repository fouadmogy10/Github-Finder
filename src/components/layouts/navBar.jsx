import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

function NavBar({title="Github Finder"}) {
  return (
    <div>
       
      <Navbar bg="dark" variant="dark">
        <Container>
          <> <FaGithub size={28}/>
           <Link to={"/"} className=" navbar-brand text-white fw-bold mx-2 text-decoration-none ">
            {title}
           </Link></>
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
