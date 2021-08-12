import React, { useRef, useState } from 'react'
import { Row, Col, Popover, Overlay } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import './history.css'

export default function History() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [popupStatus, setPopupStatus] = useState(null);
  const [itemCount, setItemCount] = useState(206);

  const handleHover = (event, status) => {
    setShow(true);
    setTarget(event.target);
    setPopupStatus(status);
  };

  const popover = (status) => (
    <Popover id="popover-contained">
      <Popover.Title as="h4" className={status}>03/05/2021 AT 16:30:20</Popover.Title>
      <Popover.Content>
        Wholesome International
        <span>Net Earnings</span>
      </Popover.Content>
      <div className="popover-arrow"></div>
    </Popover>
  );

  return (
    <>
      <Col className="strip historyCont" ref={ref}>
        <Row>
          <Col className="hisTitle">EXECUTIONS HISTORY <span>({itemCount} Total)</span></Col>
          <Col className="btnGrp">
            <button>
              <FontAwesomeIcon icon={faCaretLeft}/>
            </button>
            <button>
              <FontAwesomeIcon icon={faCaretRight}/>
            </button>
          </Col>
        </Row>
        <Overlay
          show={show}
          target={target}
          placement="top"
          container={ref.current}
          containerPadding={20}
        >
          {popover(popupStatus)}
        </Overlay>
        <Row className="trendCont">
          <div className="historyTrend">
          {
            [...Array(itemCount).keys()].map(key => {
              const status = key%10 === 0 ? "Failed" : key%25 === 0 ? "Running" : "Successful";
              return <div 
                key={key} 
                className={status} 
                onMouseOver={ (evt) => handleHover(evt, status)}
                onMouseOut={() => setShow(false)}
                ></div>
            })
          }
          </div>
          <div className="dateRange">
            <span>03/01/2021</span>
            <span>03/06/2021</span>
          </div>
        </Row>
      </Col>
    </>
  )
}
