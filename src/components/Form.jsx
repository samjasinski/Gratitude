import React, {useState} from "react";
import Input from "./Input";
import Button from "./Button";

function Form (props) {

    function handleSubmit(event) {
        event.preventDefault()
        alert('submitted')
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input/>
            <Input/> 
            <Input/> 
            <Input/> 
            <Input/> 
            <Button className="submit-button" displayText="SUBMIT" type="submit"/>
        </form>
    )
}

export default Form