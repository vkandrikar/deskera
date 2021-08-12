import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import 'react-bootstrap/dist/react-bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navbar from './components/navbar'
import Header from './components/header'
import Favourites from './components/favourites'
import Executions from './screens/executions/executions'
import NoMatch from './screens/error/nomatch'
import logo from './assets/images/logo.png'

function App() {
  return (
    <Container fluid className="py-2">
      <Router>
        <Row>
          <Col md={2}>
            <div className="leftGap mb-4 py-2">
              <img src={logo} alt="logo" width="125px"/>
            </div>
            <Favourites />
            <Navbar />
          </Col>
          <Col md={10}>
            <Row className="mb-4">
              <Header />
            </Row>
            <Row className="screenCont">
              <Switch>
                <Redirect exact from="/" to="/executions" />
                <Route path="/executions" component={Executions} />
                <Route component={NoMatch} />
              </Switch>
            </Row>
          </Col>
        </Row>
      </Router>
    </Container>
  );
}

export default App;
