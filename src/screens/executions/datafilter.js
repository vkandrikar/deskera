import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSync } from '@fortawesome/free-solid-svg-icons'
import './datafilter.css'

export default function DataFilter() {
  return (
    <Row className="dataFilter">
      <Col className="searchBox" md={4}>
        <FontAwesomeIcon icon={faSearch}/>
        <input type="text" placeholder="Search in Executions"/>
      </Col>
      <Col md={{ span: 6, offset: 2 }} className="filterMenu">
        <button className="active">All</button>
        <button>Failed</button>
        <button>Warning</button>
        <button>Successful</button>
        <button>Running</button>
        <button>
          <FontAwesomeIcon icon={faSync}/>
        </button>
      </Col>
    </Row>
  )
}
