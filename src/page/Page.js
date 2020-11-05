import React from 'react'
import PropTypes from 'prop-types'
import { Control, Field } from 'react-redux-form';
import { Submission } from '../services/Submission';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Validation } from '../services/Validation';

export class Page extends React.Component {
  componentDidMount() {
    this.props.getControls();
 
    const signalR = require("@aspnet/signalr");
    let connection = new signalR.HubConnectionBuilder()
        .withUrl(global.config.signalRhost)
        .build();
     
    connection.on("send", data => {
        console.log(data);
        if(data=='CheckList') this.props.getControls();
    });
     
    connection.start()
        .then(() => connection.invoke("send", "Hello"));
  }
  
  renderButton = () => {
    const { controltype, singlelinetext } = this.props

    return (
      <div model="page">
      </div>
     )
  }
  renderTemplate = () => {
    const { controls, isFetching, error } = this.props
    if (error) {
      return <p className="error">Error loading</p>
    }

    if (isFetching) {
      return <p>Loading...</p>
    } else {
      Validation.check(controls)
      return <Container fluid><hr/>
          {controls.map(control =>
                    <Submission model='searching' 
                    key={control.id} 
                    type={control.type} 
                    modelname={control.name} 
                    id={control.id} 
                    controlvalue={this.convertValue(control.type, control.value)}
                    error={control.error}
                    />
                )}
        </Container>
    }
  }
  convertValue(type, val){
    if(type=='date' && val!=null && (''+val).length==8) {
      const day = val.substr(0, 2)
      const month = val.substr(2, 2) - 1
      const year = val.substr(4, 4)
      var date = new Date(year, month, day)
      return date
    }
    else return val
  }
  render() {
    return (
      <div className="page">
        {this.renderButton()}
        {this.renderTemplate()}
      </div>
    )
  }
}

Page.propTypes = {
  controltype: PropTypes.string,
  controls: PropTypes.any,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  getControls: PropTypes.func.isRequired,
}

