import React, {useState} from "react";
import Input from "./Input";
import Button from "./Button";

function Form (props) {

    const [inputOneValue, setInputOneValue] = useState("")
    const [inputTwoValue, setInputTwoValue] = useState("")
    const [inputThreeValue, setInputThreeValue] = useState("")
    const [inputFourValue, setInputFourValue] = useState("")
    const [inputFiveValue, setInputFiveValue] = useState("")

    function trackInputChange (event) {
        if (event.target.id === '1') {
            setInputOneValue(event.target.value)
        } else if (event.target.id === '2') {
            setInputTwoValue(event.target.value)
        } else if (event.target.id === '3') {
            setInputThreeValue(event.target.value)
        } else if (event.target.id === '4') {
            setInputFourValue(event.target.value)
        } else if (event.target.id === '5') {
            setInputFiveValue(event.target.value)
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        const gratitudeObj = {
            1: inputOneValue,
            2: inputTwoValue,
            3: inputThreeValue,
            4: inputFourValue,
            5: inputFiveValue
        }

        await fetch("http://localhost:5050/record", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(gratitudeObj),
          })
          .catch(error => {
            window.alert(error);
            return;
          });

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