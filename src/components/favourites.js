import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import './favourites.css'

export default function Favourites() {
  return (
    <div id="favCont" className="mb-4">
      <span className="lable d-inline-block pb-3 leftGap">FAVOURITES</span>
      <div>
        <FontAwesomeIcon icon={faExchangeAlt}/>
        <span className="d-inline-block mx-2 favItem">Stellar Senior Living...</span>
      </div>
    </div>
  )
}
