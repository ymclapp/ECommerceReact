import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Registration() {
    const history = useHistory();

    async function handleRegistrationSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { email, username, password } = form.elements;

        const userRegData = {
            email:  email.value,
            username:  username.value,
            password:  password.value,
        };
        console.log("Submitting....", userRegData);

        const result = await fetch(`${ userApi }/test/user`, {
            method:  'post',
            body:  JSON.stringify(userRegData),
            headers:  {
                'Content-Type':  'application/json',
            },
        })
        console.log(result);
        form.reset();
        history.push("/Login")
    }

    return (
        <div className="form-section" title="Registration">
            <Form onSubmit={ handleRegistrationSubmit }
            className="user-signup">

                <legend>Registration Form</legend>

                <Form.Group className="mb-3" controlId="form.email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control name="email" type="email" placeholder="jane@example.com" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="form.first_name">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control name="first_name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="form.last_name">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control name="last_name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="form.username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control name="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="form.password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control name="password" type="password" />
                </Form.Group>

                <Form.Group className="form-buttons">
                    <Button href="/"
                    className="back-button">Back</Button>
                    <Button type="submit" redirect="/Login">Register</Button>
                </Form.Group>
            </Form>
        </div>
    )
}