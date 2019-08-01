import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Combobox } from './components/Combobox/Combobox'
// import { Combobox, Request } from './components/index';
import { Col, Row } from 'reactstrap';
import './App.css';

class App extends Component {
  state = {
    universidades: [],
  };

  componentDidMount(){
    this.loadUniversidades();
  }

  loadUniversidades(){
    fetch('http://localhost:8091/universidades')
    .then(res => res.json())
    .then((data) => {
      this.setState({ universidades: data })
    })
    .catch(console.log)
  }

  render(){
    const { universidades } = this.state;
    return (
      <div className="App">
        <Row>
          <Col xs={6}>
            <Combobox universidades={universidades}></Combobox>
          </Col>
          <Col xs={6}>
            <Combobox universidades={universidades}></Combobox>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
