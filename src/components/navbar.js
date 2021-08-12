import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeartbeat, faExchangeAlt, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const currentPage = pathname.split("/")[1];

  return (
    <>
      <span className="lable d-inline-block pb-3 leftGap">NAVIGATION</span>
      <Nav className="nav">
        <Link to={{ pathname: "/dashboard" }} className={`pb-3 ${currentPage === "dashboard" ? "active" : ""}`}>
          <div>
            <FontAwesomeIcon icon={faHome}/>
            <span className="d-inline-block mx-2">Dashboard</span>
          </div>
        </Link>
        <Link to={{ pathname: "/executions" }} className={`pb-3 ${currentPage === "executions" ? "active" : ""}`}>
          <div>
            <FontAwesomeIcon icon={faHeartbeat}/>
            <span className="d-inline-block mx-2">Executions</span>
          </div>
        </Link>
        <Link to={{ pathname: "/integrations" }} className={`pb-3 ${currentPage === "integrations" ? "active" : ""}`}>
          <div>
            <FontAwesomeIcon icon={faExchangeAlt}/>
            <span className="d-inline-block mx-2">Integrations</span>
          </div>
        </Link>
        <Link to={{ pathname: "/scheduler" }} className={`pb-3 ${currentPage === "scheduler" ? "active" : ""}`}>
          <div>
            <FontAwesomeIcon icon={faCalendar}/>
            <span className="d-inline-block mx-2">Schedule Jobs</span>
          </div>
        </Link>
        <Link to={{ pathname: "/users" }} className={`pb-3 ${currentPage === "users" ? "active" : ""}`}>
          <div>
            <FontAwesomeIcon icon={faUser}/>
            <span className="d-inline-block mx-2">Users</span>
          </div>
        </Link>
      </Nav>
    </>
  )
}
