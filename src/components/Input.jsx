import React, {useState} from "react";

function Input (props) {
    return (
        <input id={props.id} onChange={props.onChange} type="text" return="false" required/>
    )
}

export default Input