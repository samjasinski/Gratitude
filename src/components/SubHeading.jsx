import React from "react";
import Col from 'react-bootstrap/Col';

function SubHeading(props) {
    return (
        <Col>
            <p id="sub-heading">{props.text}</p>
        </Col>
        
    )
}

export default SubHeading