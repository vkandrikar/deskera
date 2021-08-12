import React from 'react'
import { Row, Table } from 'react-bootstrap'
import executionsStyle from './executions.css'
import MenuBar from './menubar'
import History from './history'
import DataFilter from './datafilter'
import TableRow from './tablerow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function Executions() {
  return (
    <>
      <Row>
        <MenuBar />
      </Row>
      <Row>
        <History />
      </Row>
      <Row>
        <DataFilter />
        <Table responsive="md" className="tableStrip">
          <thead>
            <tr >
              <th>Status</th>
              <th>
                <div>
                  <span className="mx-2">Time Started</span>
                  <FontAwesomeIcon icon={faArrowUp}/>
                </div>
              </th>
              <th>Partner</th>
              <th>Data Exchange Job</th>
              <th>Elapsed Time</th>
              <th>Data In</th>
              <th>Data Out</th>
              <th></th>
            </tr>
          </thead>
        <tbody>
          <TableRow status="Successful" datain="3" dataout="1"/>
          <TableRow status="Successful" datain="3" dataout="1"/>
          <TableRow status="Successful" datain="3" dataout="1"/>
          <TableRow status="Failed" datain="2" dataout="0"/>
          <TableRow status="Successful" datain="3" dataout="1"/>
          <TableRow status="Successful" datain="3" dataout="1"/>
          <TableRow status="Running" datain="0" dataout="0"/>
          <TableRow status="Successful" datain="3" dataout="1"/>
          <TableRow status="Successful" datain="3" dataout="1"/>
        </tbody>
      </Table>
      </Row>
    </>
  )
}
