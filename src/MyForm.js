import {useState} from "react";
import { Form } from "react-bootstrap";

function MyForm() {
    const [inputs, setInputs] = useState({});
    const handleChanges = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
    };
    return (
        <Form onSubmit={handleSubmit}>
            <p>** Form Component Starts Here ** </p>
            <label>Enter Your Name :
            <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChanges}
            />
            </label>
            <label>Enter Your Age :
            <input
                type="text"
                name="age"
                value={inputs.age || ""}
                onChange={handleChanges}
            />
            </label>
            <input type="submit"/>
            <p>** Form Component Starts Here ** </p>
        </Form>
    );
}

export default MyForm;