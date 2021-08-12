import React from 'react'
import {  } from 'react-router-dom'
import { Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faQuestionCircle, faBell } from '@fortawesome/free-solid-svg-icons'
import './header.css'

export default function Header() {
  return (
    <Row>
      <Col className="searchBox" md={4}>
        <FontAwesomeIcon icon={faSearch}/>
        <input type="text" placeholder="Search" style={{"font-family": "Arial, FontAwesome"}}/>
      </Col>
      <Col md={{ span: 3, offset: 5 }} className="menu">
        <Col md={2} className="d-inline-block"><FontAwesomeIcon icon={faQuestionCircle}/></Col>
        <Col md={2} className="d-inline-block separator"><FontAwesomeIcon icon={faBell}/></Col>
        <Col md={4} className="d-inline-block">
          <Navbar id="navbar-light-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-light-example"
                title="Alex G."
                menuVariant="light"
                drop="start"
              >
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
        </Col>
      </Col>
    </Row>
  )
}
