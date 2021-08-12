import React from 'react'
import { Col } from 'react-bootstrap'
import './menubar.css'

export default function MenuBar() {
  return (
    <>
      <Col md={3} className="removePL"><h5>Executions</h5></Col>
      <Col md={{ span: 9, offset: 0 }} className="sortMenu">
        <div className="d-inline-block mx-5">
          <label for="job">Data Exchange Job:</label>
          <select name="job">
            <option>All</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="d-inline-block">
          <label for="job">Period:</label>
          <select name="job">
            <option>Last Hour</option>
            <option>Last 30 Days</option>
          </select>
        </div>
      </Col>
    </>
  )
}
