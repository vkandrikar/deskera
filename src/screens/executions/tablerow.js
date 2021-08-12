import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle, faCog, faCheck, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import './tablerow.css'

export default function TableRow(props) {
  const {status, datain, dataout} = props;
  return (
    <tr className={`${status}`}>
      <td>
        <FontAwesomeIcon icon={ status === "Running" ? faCog: status === "Failed" ? faExclamationCircle : faCheck} />
        <span class="d-inline-block mx-2">{status}</span>
      </td>
      <td>03/06/2021<br/>16:22:20</td>
      <td>Campbell Oil</td>
      <td>Paycor Event Based Vaultcheck</td>
      <td>1 sec</td>
      <td className={datain !== "0" ? "highliter" : ""}>
        <FontAwesomeIcon icon={ faCaretRight } />
        <span class="d-inline-block mx-2">{datain}</span>
      </td>
      <td className={dataout !== "0" ? "highliter" : ""}>
        <FontAwesomeIcon icon={ faCaretRight } />
        <span class="d-inline-block mx-2">{dataout}</span>
      </td>
      <td>{status === "Failed" && <button>View Error</button>}</td>
    </tr>
  )
}
