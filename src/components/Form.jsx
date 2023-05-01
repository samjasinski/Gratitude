import React, {useState} from "react";
import Input from "./Input";
import Button from "./Button";

function Form (props) {

    const [inputOneValue, setInputOneValue] = useState("")
    const [inputTwoValue, setInputTwoValue] = useState("")
    const [inputOThreeValue, setInputThreeValue] = useState("")
    const [inputFourValue, setInputFourValue] = useState("")
    const [inputFiveValue, setInputFiveValue] = useState("")

    function trackInputChange (event) {
        console.log(event.target.value, event.target.id)
    }


    function handleSubmit(event) {
        event.preventDefault();
        alert('submitted');
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input onChange={trackInputChange} id="1"/>
            <Input onChange={trackInputChange} id="2"/> 
            <Input onChange={trackInputChange} id="3"/> 
            <Input onChange={trackInputChange} id="4"/> 
            <Input onChange={trackInputChange} id="5"/> 
            <Button className="submit-button" displayText="SUBMIT" type="submit"/>
        </form>
    )
}

export default Form