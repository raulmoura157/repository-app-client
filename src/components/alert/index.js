import React from 'react';
import {Alert} from 'react-bootstrap';

import './styles.css'

export default function AlertCard (props){    
    return (
    <Alert className='alert' variant={props.variant} show={props.show}>
        <Alert.Heading>{props.heading}</Alert.Heading>
        <p>
            {props.body}
        </p>
    </Alert>
    )
}