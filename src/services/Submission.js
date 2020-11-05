import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-redux-form';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "./react-datepicker.css";

export class Submission extends Component {
    state = {
        startDate: null //new Date()
    };
    render() {
        const { type, modelname, id, controlvalue, error } = this.props
        const controlname = 'div' + id;
        const errorclassname = error!=null?'controlerror':'';
        const onChangeRadio = (e, id) => {  }    
        const onChangeCheckbox = (e, id) => {  }    
        const onChangeSelect = (e, id) => {  }    
        const onChangeText = (e, id) => {  }    
        const onChangeDate = (startDate, id) => {
            if(startDate!=null)
            {
                var d = new Date(startDate);
                var day = '' +d.getDate();
                if(day.length == 1) day = '0' + day;
                var month = '' +(d.getMonth()+1);
                if(month.length == 1) month = '0' + month;
                var s = ''+day+month+d.getFullYear();
                this.setState({ s });
            }
        };    

        switch(type) {
            case 'text':
                return (<InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>{modelname}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control className={errorclassname} type='text' model={modelname} value={controlvalue?controlvalue:''} onChange={(e) => onChangeText(e, id)} />
                    </InputGroup>
                    <Form.Label className='controlerrortext'>{error}</Form.Label>
                    </InputGroup>
                )
            case 'textarea':
                return (<InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>{modelname}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control as="textarea" rows={3} model={modelname} value={controlvalue?controlvalue:''} onChange={(e) => onChangeText(e, id)}/>
                    </InputGroup>
                    <Form.Label className='controlerrortext'>{error}</Form.Label>
                    </InputGroup>
                )
            case 'select':
                return (
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>{modelname}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control as="select" model={modelname} value={controlvalue?controlvalue:'0'} onChange={(e) => onChangeSelect(e, id)}>
                            <option value="0"></option>
                            <option value="1">this is value 1 of the select control</option>
                            <option value="2">value 2</option>
                            <option value="3">value 3</option>
                            <option value="4">value 4</option>
                        </Form.Control>
                    </InputGroup>
                )
            case 'date':
                return (<InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>{modelname}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <DatePicker className='form-control datepicker {{errorclassname}}' dateFormat="dd.MM.yyyy"
                            selected={controlvalue} onChange={(date) => onChangeDate(date, id)} />
                    </InputGroup>
                    <Form.Label className='controlerrortext'>{error}</Form.Label>
                    </InputGroup>
                )
            case 'radio':
                return (<div key={controlname}>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>{modelname}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Check type='radio' className='checkboxradio' model={modelname} name={modelname} value='on' checked={controlvalue?controlvalue=='on':false} onChange={(e) => onChangeRadio(e, id)} />
                        <Form.Control type='text' value='on' readOnly/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>{modelname}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Check  type='radio' className='checkboxradio' model={modelname} name={modelname} value='off' checked={controlvalue?controlvalue=='off':false} onChange={(e) => onChangeRadio(e, id)} />
                        <Form.Control type='text' value='off' readOnly/>
                    </InputGroup>
                </div>)
            case 'checkbox':
                return (
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>{modelname}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Check type='checkbox' className='checkboxradio' model={modelname} checked={controlvalue?controlvalue=='true':false} onChange={(e) => onChangeCheckbox(e, id)} />
                        <Form.Control type='text' readOnly/>
                    </InputGroup>
                )
            default:
                return(<Field><a>Empty</a></Field>)
        }
    }
}
Submission.propTypes = {
    type: PropTypes.string,
    modelname: PropTypes.string,
    id: PropTypes.number,
    controlvalue: PropTypes.any,
    error: PropTypes.string,
}
